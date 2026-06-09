import { and, desc, eq, inArray, isNull, lt, or } from "drizzle-orm";
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
import { buildPayload } from "../eva/payload-builder";
import { createClient } from "@/src/eva/server";
import {
  ImportProducts_Async,
  ServicesProductPropertyTypesListProductPropertyTypesDto,
} from "@/src/eva/generated/eva-services-pim";
import {
  PricingTaxCodeItem,
  UsersLoggedInUserDto,
} from "@/src/eva/generated/eva-services-core";

type EvaClient = Awaited<ReturnType<typeof createClient>>;

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

      const eva = await createClient({
        baseUrl: res.endpoint,
        namespace: res.namespace,
      });
      return new CEnvironment(res, eva);
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
  constructor(
    readonly data: SelectEnvironment,
    readonly eva: EvaClient,
  ) {}

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

  public async listProductProperties(): Promise<
    ServicesProductPropertyTypesListProductPropertyTypesDto[]
  > {
    const requestBody = {
      PageConfig: {
        Start: 0,
        Limit: 200,
        Filter: { CategoryID: "default", DataType: 4 },
      },
    };

    const data = await this.eva.ListProductPropertyTypes(requestBody);

    if (!data || !data.Result) {
      return [];
    }

    return data.Result.Page;
  }

  public async listTaxCodes(): Promise<PricingTaxCodeItem[]> {
    const requestBody = {
      PageConfig: {
        Start: 0,
        Limit: 200,
      },
    };

    const data = await this.eva.ListTaxCodes(requestBody);

    if (!data || !data.Result) {
      return [];
    }

    return data.Result.Page;
  }

  public async getCurrentUser(): Promise<UsersLoggedInUserDto | undefined> {
    const data = await this.eva.GetCurrentUser({});

    if (!data) {
      return undefined;
    }

    return data.User;
  }

  // -------------------------------------------------------------------------
  // Sync methods
  // -------------------------------------------------------------------------

  public async listProductsForSync(): Promise<ProductWithRelations[]> {
    try {
      const allProducts = await db
        .select()
        .from(products)
        .where(
          and(
            eq(products.environmentId, this.data.id),
            // Exclude deleted products already synced after deletion
            or(
              isNull(products.isDeleted),
              eq(products.isDeleted, false),
              isNull(products.lastSyncedAt),
              lt(products.lastSyncedAt, products.lastUpdatedAt),
            ),
          ),
        );

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

  public async triggerSync(): Promise<{
    runId: string;
    asyncToken?: string;
    error?: string;
  }> {
    const runId = await this.createSyncRun();
    if (!runId) {
      return { runId: "", error: "Failed to create sync run record" };
    }

    let payload: Record<string, unknown> | undefined;

    try {
      const rootProducts = await this.listProductsForSync();

      payload = buildPayload(rootProducts);

      const data = await this.eva.ImportProducts_Async(
        payload as unknown as ImportProducts_Async,
      );

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

  public async pollSyncRun(runId: string): Promise<SelectSyncRun | null> {
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

      const data = await this.eva.ImportProducts_AsyncResult(requestBody);

      if (!data) return run;

      if (data?.Metadata?.IsAsyncResultAvailable) {
        const hasError = data?.Error;

        if (!hasError) {
          const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
          const productMap = data.ProductMap ?? [];
          const backendById = new Map(
            productMap
              .filter((e) => uuidRegex.test(e.BackendID ?? ""))
              .map((e) => [e.ID, e.BackendID]),
          );

          const now = new Date();

          // Mark all submitted products as synced
          await db
            .update(products)
            .set({ lastSyncedAt: now })
            .where(eq(products.environmentId, this.data.id));

          // Set evaId for newly created products
          const createdEvaIds = data.CreatedProductIDs ?? [];
          for (const evaId of createdEvaIds) {
            const backendId = backendById.get(evaId);
            if (!backendId) continue;
            await db
              .update(products)
              .set({ evaId: String(evaId) })
              .where(eq(products.id, backendId));
          }
        }

        await this.updateSyncRun(runId, {
          status: hasError ? "failed" : "success",
          completedAt: new Date(),
          evaResponse: data,
          ...(hasError ? { error: String(data.Error) } : {}),
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
