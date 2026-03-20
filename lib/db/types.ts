import { environments, productImages, products, syncRuns } from "./schema";

export type SelectEnvironment = typeof environments.$inferSelect;
export type InsertEnvironment = typeof environments.$inferInsert;

export type SelectProduct = typeof products.$inferSelect & {
  images: SelectProductImage[];
  children: SelectProduct[];
};
export type InsertProduct = Omit<typeof products.$inferInsert, "environmentId">;

export type SelectProductImage = typeof productImages.$inferSelect;
export type InsertProductImage = typeof productImages.$inferInsert;

export type SelectSyncRun = typeof syncRuns.$inferSelect;
export type InsertSyncRun = typeof syncRuns.$inferInsert;

// Compound type for sync
export type ProductWithRelations = {
  id: string;
  evaId: string | null;
  name: string;
  taxCode: string;
  brand: string | null;
  published: boolean;
  isDeleted: boolean | null;
  childrenVariationProperty: string | null;
  childrenLogicalLevel: string | null;
  variationValue: string | null;
  images: SelectProductImage[];
  children: ProductWithRelations[];
};
