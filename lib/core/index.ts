import { eq } from "drizzle-orm";
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
  ): Promise<boolean> {
    try {
      await db.update(products).set(data).where(eq(products.id, id));

      // Replace all images
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
}

export const core = new CCore();
