import { and, desc, eq, inArray, isNull, or } from "drizzle-orm";
import { environments, productImages, products, syncRuns } from "../db/schema";
import {
  InsertEnvironment,
  InsertProduct,
  InsertSyncRun,
  ProductWithRelations,
  SelectEnvironment,
  SelectProduct,
  SelectProductImage,
  SelectSyncRun,
} from "../db/types";
import { db } from "../db";
import { deleteCookies, setCookies } from "../cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { CallEvaServiceProps, ProductProperty, TaxCode, User } from "./types";
import { buildPayload } from "../eva/payload-builder";

class CCore {
  public async validateEvaEndpoint(endpoint: string): Promise<string | null> {
    try {
      const res = await fetch(`${endpoint}/info`);
      const data = await res.json();
      if (data.Namespace) return data.Namespace;
    } catch (error) {
      console.error("[ERROR]:[CCore]:[validateEvaEndpoint]:", error);
      return null;
    }

    return null;
  }

  public async getEnvironmentByNamespace(
    namespace: SelectEnvironment["namespace"],
  ): Promise<CEnvironment | null> {
    try {
      const [res] = await db
        .select()
        .from(environments)
        .where(eq(environments.namespace, namespace))
        .limit(1);

      if (!res) return null;

      return new CEnvironment(res);
    } catch (error) {
      console.error("[ERROR]:[CCore]:[getEnvironmentByNamespace]:", error);
      return null;
    }
  }

  public async createEnvironment(data: InsertEnvironment): Promise<boolean> {
    try {
      const res = await db.insert(environments).values(data);

      return res.count === 1;
    } catch (error) {
      console.error("[ERROR]:[CCore]:[createEnvironment]:", error);
      return false;
    }
  }
}

class CEnvironment {
  constructor(readonly data: SelectEnvironment) {}

  public async callEvaService({
    service,
    body,
    extraHeaders,
    cookies,
    type = "message",
  }: CallEvaServiceProps) {
    const token = cookies?.get(`at-${this.data.namespace}`)?.value;

    const headers = {
      "EVA-User-Agent": "eva-pim-app/0.1",
      "Content-Type": "application/json",
      "Accept-Language": "application/json",
      ...(token ? { Authorization: `eva ${token}` } : {}),
      ...(extraHeaders ?? {}),
    };

    try {
      const res = await fetch(`${this.data.endpoint}/${type}/${service}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      const json = await res.json();
      if (!res.ok) console.error("[EVA]:", JSON.stringify(json));
      return json;
    } catch {
      return null;
    }
  }

  public async login(username: string, password: string): Promise<boolean> {
    const requestBody = {
      Username: username,
      Password: password,
      OrganizationUnitID: "1",
      useJwtTokens: true,
    };

    const data = await this.callEvaService({
      service: "login",
      body: requestBody,
    });

    if (!data || data.Authentication != 2) return false;

    const cookies = await setCookies({
      namespace: this.data.namespace,
      at: data.User.AuthenticationToken,
      rt: data.User.RefreshToken,
      rtExpString: data.User.RefreshTokenExpireDate,
    });

    if (!cookies) {
      return false;
    }

    return true;
  }

  public async refreshToken(token: string): Promise<boolean> {
    const requestBody = {
      Token: token,
    };

    const data = await this.callEvaService({
      service: "refreshToken",
      body: requestBody,
    });

    if (!data) {
      await deleteCookies(this.data.namespace);
      return false;
    }

    if (!data.Token || !data.RefreshToken || !data.RefreshTokenExpireDate) {
      await deleteCookies(this.data.namespace);
      return false;
    }

    return await setCookies({
      namespace: this.data.namespace,
      at: data.Token,
      rt: data.RefreshToken,
      rtExpString: data.RefreshTokenExpireDate,
    });
  }

  private notDeleted() {
    return or(isNull(products.isDeleted), eq(products.isDeleted, false));
  }

  private async softDeleteSubtree(id: string): Promise<void> {
    const ids: string[] = [id];
    const queue = [id];
    while (queue.length > 0) {
      const parentId = queue.shift()!;
      const children = await db
        .select({ id: products.id })
        .from(products)
        .where(eq(products.parentId, parentId));
      for (const c of children) {
        ids.push(c.id);
        queue.push(c.id);
      }
    }
    await db
      .update(products)
      .set({ isDeleted: true })
      .where(inArray(products.id, ids));
  }

  private async buildProductTree(rootIds: string[]): Promise<SelectProduct[]> {
    if (rootIds.length === 0) return [];

    const allProducts = await db
      .select()
      .from(products)
      .where(and(eq(products.environmentId, this.data.id), this.notDeleted()));

    const allImages = await db
      .select()
      .from(productImages)
      .where(
        inArray(
          productImages.productId,
          allProducts.map((p) => p.id),
        ),
      );

    const imagesMap = new Map<string, SelectProductImage[]>();
    for (const img of allImages) {
      const arr = imagesMap.get(img.productId) ?? [];
      arr.push(img);
      imagesMap.set(img.productId, arr);
    }

    const childrenMap = new Map<string, typeof allProducts>();
    for (const p of allProducts) {
      if (p.parentId) {
        const arr = childrenMap.get(p.parentId) ?? [];
        arr.push(p);
        childrenMap.set(p.parentId, arr);
      }
    }

    const buildNode = (product: (typeof allProducts)[0]): SelectProduct => ({
      ...product,
      images: imagesMap.get(product.id) ?? [],
      children: (childrenMap.get(product.id) ?? []).map(buildNode),
    });

    const rootSet = new Set(rootIds);
    return allProducts.filter((p) => rootSet.has(p.id)).map(buildNode);
  }

  public async listProducts(): Promise<SelectProduct[]> {
    try {
      const roots = await db
        .select({ id: products.id })
        .from(products)
        .where(
          and(
            eq(products.environmentId, this.data.id),
            isNull(products.parentId),
          ),
        );
      return this.buildProductTree(roots.map((r) => r.id));
    } catch (error) {
      console.error("[ERROR]:[CEnvironment]:[listProducts]:", error);
      return [];
    }
  }

  public async updateProduct(
    id: string,
    data: Partial<InsertProduct>,
    imageUrls: string[] = [],
  ): Promise<boolean> {
    try {
      await db
        .update(products)
        .set({ ...data, lastUpdatedAt: new Date() })
        .where(eq(products.id, id));

      await db.delete(productImages).where(eq(productImages.productId, id));
      if (imageUrls.length > 0) {
        await db.insert(productImages).values(
          imageUrls.map((imageUrl, index) => ({
            productId: id,
            imageUrl,
            primaryImage: index === 0,
            sequence: index,
          })),
        );
      }

      return true;
    } catch (error) {
      console.error(
        `[ERROR]:[CEnvironment]:[updateProduct]:${JSON.stringify(error, null, 2)}`,
      );
      return false;
    }
  }

  public async createProduct(
    data: InsertProduct,
    imageUrls: string[] = [],
  ): Promise<boolean> {
    try {
      const [product] = await db
        .insert(products)
        .values({ ...data, environmentId: this.data.id })
        .returning({ id: products.id });

      if (imageUrls.length > 0) {
        await db.insert(productImages).values(
          imageUrls.map((imageUrl, index) => ({
            productId: product.id,
            imageUrl,
            primaryImage: index === 0,
            sequence: index,
          })),
        );
      }

      return true;
    } catch (error) {
      console.error(
        `[ERROR]:[CEnvironment]:[createProduct]:${JSON.stringify(error, null, 2)}`,
      );
      return false;
    }
  }

  public async getProduct(id: string): Promise<SelectProduct | null> {
    try {
      const [exists] = await db
        .select({ id: products.id })
        .from(products)
        .where(
          and(eq(products.id, id), eq(products.environmentId, this.data.id)),
        )
        .limit(1);

      if (!exists) return null;

      const [result] = await this.buildProductTree([id]);
      return result ?? null;
    } catch (error) {
      console.error("[ERROR]:[CEnvironment]:[getProduct]:", error);
      return null;
    }
  }

  public async updateProductWithVariants(
    id: string,
    data: Partial<InsertProduct>,
    imageUrls: string[],
    removedImagePaths: string[],
    variants?: { property: string; values: string[] },
    secondaryVariants?: { property: string; values: string[] },
  ): Promise<boolean> {
    try {
      await db
        .update(products)
        .set({
          ...data,
          lastUpdatedAt: new Date(),
          childrenVariationProperty: variants?.property ?? null,
          childrenLogicalLevel: variants?.property ?? null,
        })
        .where(eq(products.id, id));

      if (removedImagePaths.length > 0) {
        const { deleteProductImages } = await import("@/lib/supabase/actions");
        await deleteProductImages(removedImagePaths);
      }

      await db.delete(productImages).where(eq(productImages.productId, id));
      if (imageUrls.length > 0) {
        await db.insert(productImages).values(
          imageUrls.map((imageUrl, index) => ({
            productId: id,
            imageUrl,
            primaryImage: index === 0,
            sequence: index,
          })),
        );
      }

      const existingChildren = await db
        .select()
        .from(products)
        .where(and(eq(products.parentId, id), this.notDeleted()));

      if (variants) {
        const newValues = new Set(variants.values);

        for (const child of existingChildren) {
          if (!child.variationValue || !newValues.has(child.variationValue)) {
            await this.softDeleteSubtree(child.id);
          }
        }

        for (const value of variants.values) {
          const existing = existingChildren.find(
            (c) => c.variationValue === value,
          );

          let primaryId: string;

          if (existing) {
            primaryId = existing.id;
            await db
              .update(products)
              .set({
                name: `${data.name ?? ""} - ${value}`,
                taxCode: data.taxCode ?? "",
                published: data.published ?? false,
                isDeleted: false,
                childrenVariationProperty: secondaryVariants?.property ?? null,
                childrenLogicalLevel: secondaryVariants?.property ?? null,
              })
              .where(eq(products.id, existing.id));
          } else {
            const [primary] = await db
              .insert(products)
              .values({
                environmentId: this.data.id,
                parentId: id,
                name: `${data.name ?? ""} - ${value}`,
                variationValue: value,
                taxCode: data.taxCode ?? "",
                published: data.published ?? false,
                ...(secondaryVariants
                  ? {
                      childrenVariationProperty: secondaryVariants.property,
                      childrenLogicalLevel: secondaryVariants.property,
                    }
                  : {}),
              })
              .returning({ id: products.id });
            primaryId = primary.id;
          }

          if (secondaryVariants) {
            const existingGrandchildren = await db
              .select()
              .from(products)
              .where(and(eq(products.parentId, primaryId), this.notDeleted()));

            const newSecValues = new Set(secondaryVariants.values);

            for (const gc of existingGrandchildren) {
              if (!gc.variationValue || !newSecValues.has(gc.variationValue)) {
                await this.softDeleteSubtree(gc.id);
              }
            }

            for (const secValue of secondaryVariants.values) {
              const existingGc = existingGrandchildren.find(
                (gc) => gc.variationValue === secValue,
              );
              if (existingGc) {
                await db
                  .update(products)
                  .set({
                    name: `${data.name ?? ""} - ${value} - ${secValue}`,
                    taxCode: data.taxCode ?? "",
                    published: data.published ?? false,
                    isDeleted: false,
                  })
                  .where(eq(products.id, existingGc.id));
              } else {
                await db.insert(products).values({
                  environmentId: this.data.id,
                  parentId: primaryId,
                  name: `${data.name ?? ""} - ${value} - ${secValue}`,
                  variationValue: secValue,
                  taxCode: data.taxCode ?? "",
                  published: data.published ?? false,
                });
              }
            }
          } else {
            const grandchildren = await db
              .select({ id: products.id })
              .from(products)
              .where(and(eq(products.parentId, primaryId), this.notDeleted()));
            for (const gc of grandchildren) {
              await this.softDeleteSubtree(gc.id);
            }
          }
        }
      } else {
        for (const child of existingChildren) {
          await this.softDeleteSubtree(child.id);
        }
      }

      return true;
    } catch (error) {
      console.error(
        `[ERROR]:[CEnvironment]:[updateProductWithVariants]:${JSON.stringify(error, null, 2)}`,
      );
      return false;
    }
  }

  public async createProductWithVariants(
    data: InsertProduct,
    imageUrls: string[],
    variants?: { property: string; values: string[] },
    secondaryVariants?: { property: string; values: string[] },
  ): Promise<{ success: boolean; productId?: string }> {
    try {
      const [root] = await db
        .insert(products)
        .values({
          ...data,
          environmentId: this.data.id,
          ...(variants
            ? {
                childrenVariationProperty: variants.property,
                childrenLogicalLevel: variants.property,
              }
            : {}),
        })
        .returning({ id: products.id });

      if (imageUrls.length > 0) {
        await db.insert(productImages).values(
          imageUrls.map((imageUrl, index) => ({
            productId: root.id,
            imageUrl,
            primaryImage: index === 0,
            sequence: index,
          })),
        );
      }

      if (variants) {
        for (const value of variants.values) {
          const [primary] = await db
            .insert(products)
            .values({
              environmentId: this.data.id,
              parentId: root.id,
              name: `${data.name} - ${value}`,
              variationValue: value,
              taxCode: data.taxCode ?? "",
              published: data.published,
              ...(secondaryVariants
                ? {
                    childrenVariationProperty: secondaryVariants.property,
                    childrenLogicalLevel: secondaryVariants.property,
                  }
                : {}),
            })
            .returning({ id: products.id });

          if (secondaryVariants) {
            await db.insert(products).values(
              secondaryVariants.values.map((secValue) => ({
                environmentId: this.data.id,
                parentId: primary.id,
                name: `${data.name} - ${value} - ${secValue}`,
                variationValue: secValue,
                taxCode: data.taxCode ?? "",
                published: data.published,
              })),
            );
          }
        }
      }

      return { success: true, productId: root.id };
    } catch (error) {
      console.error(
        `[ERROR]:[CEnvironment]:[createProductWithVariants]:${JSON.stringify(error, null, 2)}`,
      );
      return { success: false };
    }
  }

  public async deleteProduct(id: string): Promise<boolean> {
    try {
      await this.softDeleteSubtree(id);
      return true;
    } catch (error) {
      console.error(
        `[ERROR]:[CEnvironment]:[deleteProduct]:${JSON.stringify(error, null, 2)}`,
      );
      return false;
    }
  }

  public async listProductProperties(
    cookies: ReadonlyRequestCookies,
  ): Promise<ProductProperty[]> {
    const requestBody = {
      PageConfig: {
        Start: 0,
        Limit: 200,
        Filter: { CategoryID: "default", DataType: 4 },
      },
    };

    const data = await this.callEvaService({
      service: "listproductpropertytypes",
      body: requestBody,
      cookies,
    });

    if (!data) {
      return [];
    }

    return data.Result.Page as ProductProperty[];
  }

  public async listTaxCodes(
    cookies: ReadonlyRequestCookies,
  ): Promise<TaxCode[]> {
    const requestBody = {
      PageConfig: {
        Start: 0,
        Limit: 200,
      },
    };

    const data = await this.callEvaService({
      service: "listtaxcodes",
      body: requestBody,
      cookies,
    });

    if (!data) {
      return [];
    }

    return data.Result.Page as TaxCode[];
  }

  public async getCurrentUser(
    cookies: ReadonlyRequestCookies,
  ): Promise<User | null> {
    const data = await this.callEvaService({
      service: "getcurrentuser",
      cookies,
    });

    console.log(data.User.ScopedFunctionalities);

    if (!data) {
      return null;
    }

    return data as User;
  }

  // -------------------------------------------------------------------------
  // Sync methods
  // -------------------------------------------------------------------------

  public async listProductsForSync(): Promise<ProductWithRelations[]> {
    try {
      const allProducts = await db
        .select()
        .from(products)
        .where(eq(products.environmentId, this.data.id));

      const productIds = allProducts.map((p) => p.id);
      if (productIds.length === 0) return [];

      const allImages = await db
        .select()
        .from(productImages)
        .where(inArray(productImages.productId, productIds));

      const imagesMap = new Map<string, typeof allImages>();
      for (const img of allImages) {
        const arr = imagesMap.get(img.productId) ?? [];
        arr.push(img);
        imagesMap.set(img.productId, arr);
      }

      const childrenMap = new Map<string, typeof allProducts>();
      for (const p of allProducts) {
        if (p.parentId) {
          const arr = childrenMap.get(p.parentId) ?? [];
          arr.push(p);
          childrenMap.set(p.parentId, arr);
        }
      }

      const buildProductWithRelations = (
        product: (typeof allProducts)[0],
      ): ProductWithRelations => {
        const children = (childrenMap.get(product.id) ?? []).map(
          buildProductWithRelations,
        );
        return {
          id: product.id,
          evaId: product.evaId ?? null,
          name: product.name,
          taxCode: product.taxCode,
          brand: product.brand ?? null,
          published: product.published,
          isDeleted: product.isDeleted ?? null,
          childrenVariationProperty: product.childrenVariationProperty ?? null,
          childrenLogicalLevel: product.childrenLogicalLevel ?? null,
          variationValue: product.variationValue ?? null,
          images: imagesMap.get(product.id) ?? [],
          children,
        };
      };

      return allProducts
        .filter((p) => p.parentId === null)
        .map(buildProductWithRelations);
    } catch (error) {
      console.error("[ERROR]:[CEnvironment]:[listProductsForSync]:", error);
      return [];
    }
  }

  public async createSyncRun(): Promise<string | null> {
    try {
      const [row] = await db
        .insert(syncRuns)
        .values({
          evaNamespace: this.data.namespace,
          status: "pending_async",
          syncType: "full",
          triggeredBy: "manual",
        })
        .returning({ id: syncRuns.id });

      return row?.id ?? null;
    } catch (error) {
      console.error("[ERROR]:[CEnvironment]:[createSyncRun]:", error);
      return null;
    }
  }

  public async updateSyncRun(
    runId: string,
    data: Partial<InsertSyncRun>,
  ): Promise<void> {
    try {
      await db.update(syncRuns).set(data).where(eq(syncRuns.id, runId));
    } catch (error) {
      console.error("[ERROR]:[CEnvironment]:[updateSyncRun]:", error);
    }
  }

  public async getSyncRun(runId: string): Promise<SelectSyncRun | null> {
    try {
      const [row] = await db
        .select()
        .from(syncRuns)
        .where(eq(syncRuns.id, runId))
        .limit(1);
      return row ?? null;
    } catch (error) {
      console.error("[ERROR]:[CEnvironment]:[getSyncRun]:", error);
      return null;
    }
  }

  public async listSyncRuns(): Promise<SelectSyncRun[]> {
    try {
      return await db
        .select()
        .from(syncRuns)
        .where(eq(syncRuns.evaNamespace, this.data.namespace))
        .orderBy(desc(syncRuns.startedAt));
    } catch (error) {
      console.error("[ERROR]:[CEnvironment]:[listSyncRuns]:", error);
      return [];
    }
  }

  public async triggerSync(
    cookies: ReadonlyRequestCookies,
  ): Promise<{ runId: string; asyncToken?: string; error?: string }> {
    const runId = await this.createSyncRun();
    if (!runId) {
      return { runId: "", error: "Failed to create sync run record" };
    }

    let payload: Record<string, unknown> | undefined;

    try {
      const rootProducts = await this.listProductsForSync();

      payload = buildPayload(rootProducts);

      const additionalHeaders = {
        "EVA-Async-Callback": JSON.stringify({
          endpoint_backend_id: "async_bucket",
        }),
      };

      const data = await this.callEvaService({
        service: "ImportProducts",
        body: payload,
        cookies,
        type: "async-message",
        extraHeaders: additionalHeaders,
      });

      const evaError = data?.Error?.Message ?? data?.Error ?? null;

      if (!data || !data.JobID) {
        const message =
          typeof evaError === "string"
            ? evaError
            : (JSON.stringify(evaError) ?? "unknown");
        await this.updateSyncRun(runId, {
          status: "failed",
          error: message,
          completedAt: new Date(),
          requestPayload: payload,
          evaResponse: data ?? undefined,
        });
        return { runId, error: message };
      }

      const asyncToken: string | undefined = data.JobID;

      // Count all products including children recursively
      const countProducts = (items: ProductWithRelations[]): number =>
        items.reduce((sum, p) => sum + 1 + countProducts(p.children), 0);

      await this.updateSyncRun(runId, {
        status: "pending_async",
        asyncToken: asyncToken ?? null,
        productsSubmitted: countProducts(rootProducts),
        requestPayload: payload,
        evaResponse: data,
      });

      return { runId, asyncToken };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error during sync";
      await this.updateSyncRun(runId, {
        status: "failed",
        error: message,
        completedAt: new Date(),
        ...(payload ? { requestPayload: payload } : {}),
      });
      return { runId, error: message };
    }
  }

  public async pollSyncRun(
    runId: string,
    cookies: ReadonlyRequestCookies,
  ): Promise<SelectSyncRun | null> {
    try {
      const run = await this.getSyncRun(runId);
      if (!run) return null;

      // Already completed — return as-is
      if (run.status === "success" || run.status === "failed") {
        return run;
      }

      if (!run.asyncToken) return run;

      const requestBody = {
        JobID: run.asyncToken,
      };

      const data = await this.callEvaService({
        service: "importproducts",
        body: requestBody,
        cookies,
        type: "async-result",
      });

      if (!data) return run;

      if (data?.Metadata?.IsAsyncResultAvailable) {
        const hasError = data?.Error || data?.error;

        if (!hasError) {
          const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
          const productMap: Array<{ ID: string; BackendID: string }> =
            data.ProductMap ?? [];
          const backendById = new Map(
            productMap
              .filter((e) => uuidRegex.test(e.BackendID))
              .map((e) => [e.ID, e.BackendID]),
          );

          const now = new Date();

          const createdEvaIds: string[] = data.CreatedProductIDs ?? [];
          if (createdEvaIds.length > 0) {
            for (const evaId of createdEvaIds) {
              const backendId = backendById.get(evaId);
              if (!backendId) continue;
              await db
                .update(products)
                .set({ evaId, lastSyncedAt: now, lastUpdatedAt: now })
                .where(eq(products.id, backendId));
            }
          }

          const updatedEvaIds: string[] = data.UpdatedProductIDs ?? [];
          if (updatedEvaIds.length > 0) {
            const updatedBackendIds = updatedEvaIds
              .map((id) => backendById.get(id))
              .filter((id): id is string => !!id);
            if (updatedBackendIds.length > 0) {
              await db
                .update(products)
                .set({ lastSyncedAt: now, lastUpdatedAt: now })
                .where(inArray(products.id, updatedBackendIds));
            }
          }
        }

        await this.updateSyncRun(runId, {
          status: hasError ? "failed" : "success",
          completedAt: new Date(),
          evaResponse: data,
          ...(hasError ? { error: String(data.Error ?? data.error) } : {}),
        });
        return await this.getSyncRun(runId);
      }

      return run;
    } catch (error) {
      console.error("[ERROR]:[CEnvironment]:[pollSyncRun]:", error);
      return null;
    }
  }
}

export const core = new CCore();
