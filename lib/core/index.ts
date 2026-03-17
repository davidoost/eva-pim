import { eq, inArray } from "drizzle-orm";
import {
  environments,
  productImages,
  products,
  productTranslations,
  productVariations,
} from "../db/schema";
import {
  InsertEnvironment,
  InsertProduct,
  SelectEnvironment,
  SelectProduct,
} from "../db/types";
import { db } from "../db";
import { deleteCookies, setCookies } from "../cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { ProductProperty } from "./types";

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

  public async login(username: string, password: string): Promise<boolean> {
    const requestBody = {
      Username: username,
      Password: password,
      SelectFirstOrganizationUnit: true,
      useJwtTokens: true,
    };

    const requestHeaders = {
      "EVA-User-Agent": "eva-apps-demo/1.0",
      "Content-Type": "application/json",
    };

    try {
      const res = await fetch(`${this.data.endpoint}/message/login`, {
        body: JSON.stringify(requestBody),
        headers: requestHeaders,
        method: "POST",
      });

      const data = await res.json();

      if (data.Authentication != 2) return false;

      const cookies = await setCookies({
        namespace: this.data.namespace,
        at: data.User.AuthenticationToken,
        rt: data.User.RefreshToken,
        rtExpString: data.User.RefreshTokenExpireDate,
      });

      if (!cookies) {
        return false;
      }
    } catch (error) {
      return false;
    }

    return true;
  }

  public async refreshToken(token: string): Promise<boolean> {
    const requestBody = {
      Token: token,
    };

    const requestHeaders = {
      "EVA-User-Agent": "eva-apps-demo/1.0",
      "Content-Type": "application/json",
    };

    const res = await fetch(`${this.data.endpoint}/message/refreshtoken`, {
      body: JSON.stringify(requestBody),
      headers: requestHeaders,
      method: "POST",
    });

    if (!res.ok) {
      await deleteCookies(this.data.namespace);
      return false;
    }

    const data = await res.json();

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

  public async listProducts(): Promise<SelectProduct[]> {
    try {
      const rows = await db
        .select()
        .from(products)
        .where(eq(products.environmentId, this.data.id));

      return await Promise.all(
        rows.map(async (product) => {
          const [images, variations, translations] = await Promise.all([
            db
              .select()
              .from(productImages)
              .where(eq(productImages.productId, product.id)),
            db
              .select()
              .from(productVariations)
              .where(eq(productVariations.productId, product.id)),
            db
              .select()
              .from(productTranslations)
              .where(eq(productTranslations.productId, product.id)),
          ]);

          return { ...product, images, variations, translations };
        }),
      );
    } catch (error) {
      console.error("[ERROR]:[CEnvironment]:[listProducts]:", error);
      return [];
    }
  }

  public async updateProduct(
    id: string,
    data: Partial<InsertProduct>,
    imageUrls: string[] = [],
    variations: { property: string; value: string }[] = [],
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

      await db.delete(productVariations).where(eq(productVariations.productId, id));
      if (variations.length > 0) {
        await db.insert(productVariations).values(
          variations.map(({ property, value }) => ({
            productId: id,
            variationProperty: property,
            variationValue: value,
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
    variations: { property: string; value: string }[] = [],
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

      if (variations.length > 0) {
        await db.insert(productVariations).values(
          variations.map(({ property, value }) => ({
            productId: product.id,
            variationProperty: property,
            variationValue: value,
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

  public async deleteProduct(id: string): Promise<boolean> {
    try {
      // Fetch image storage paths before deleting so we can clean up storage
      const images = await db
        .select({ imageUrl: productImages.imageUrl })
        .from(productImages)
        .where(eq(productImages.productId, id));

      await db
        .delete(productTranslations)
        .where(eq(productTranslations.productId, id));
      await db
        .delete(productVariations)
        .where(eq(productVariations.productId, id));
      await db.delete(productImages).where(eq(productImages.productId, id));
      await db.delete(products).where(eq(products.id, id));

      if (images.length > 0) {
        const { deleteProductImages } = await import("@/lib/supabase/actions");
        const paths = images.map(({ imageUrl }) => {
          const match = imageUrl.match(/\/object\/public\/[^/]+\/(.+)/);
          return match ? match[1] : imageUrl;
        });
        await deleteProductImages(paths);
      }

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

    const token = cookies.get(`at-${this.data.namespace}`)?.value;

    const requestHeaders = {
      "EVA-User-Agent": "eva-apps-demo/1.0",
      "Content-Type": "application/json",
      Authorization: `eva ${token}`,
    };

    const res = await fetch(
      `${this.data.endpoint}/message/listproductpropertytypes`,
      {
        body: JSON.stringify(requestBody),
        headers: requestHeaders,
        method: "POST",
      },
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    return data.Result.Page as ProductProperty[];
  }
}

export const core = new CCore();
