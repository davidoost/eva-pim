import {
  environments,
  productImages,
  products,
  productTranslations,
  productVariations,
} from "./schema";

export type SelectEnvironment = typeof environments.$inferSelect;
export type InsertEnvironment = typeof environments.$inferInsert;

export type SelectProduct = typeof products.$inferSelect & {
  images: SelectProductImage[];
  variations: SelectProductVariation[];
  translations: SelectProductTranslation[];
};
export type InsertProduct = Omit<typeof products.$inferInsert, "environmentId">;

export type SelectProductTranslation = typeof productTranslations.$inferSelect;
export type InsertProductTranslation = typeof productTranslations.$inferInsert;

export type SelectProductVariation = typeof productVariations.$inferSelect;
export type InsertProductVariation = typeof productVariations.$inferInsert;

export type SelectProductImage = typeof productImages.$inferSelect;
export type InsertProductImage = typeof productImages.$inferInsert;
