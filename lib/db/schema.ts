import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const environments = pgTable("pim_environments", {
  id: uuid().primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  namespace: text("namespace").notNull().unique(),
  endpoint: text("endpoint").notNull(),
});

export const products = pgTable("pim_products", {
  id: uuid().primaryKey().defaultRandom(),
  environmentId: uuid("environment_id")
    .notNull()
    .references(() => environments.id),
  evaId: varchar("eva_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  lastUpdatedAt: timestamp("last_updated_at").defaultNow().notNull(),
  lastSyncedAt: timestamp("last_synced_at"),
  name: text("name").notNull(),
  shortDescription: text("short_description"),
  longDescription: text("long_description"),
  published: boolean("published").notNull().default(false),
});

export const productTranslations = pgTable("pim_product_translations", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id),
  languageId: varchar("language_id", { length: 2 }),
  name: text("name").notNull(),
  shortDescription: text("short_description").notNull(),
  longDescription: text("long_description").notNull(),
});

export const productVariations = pgTable("pim_product_variations", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id),
  variationProperty: text("variation_property").notNull(),
  variationValue: text("variation_value").notNull(),
  sequence: integer("sequence").notNull().default(0),
});

export const productImages = pgTable("pim_product_images", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id),
  imageUrl: text("image_url").notNull(),
  primaryImage: boolean("primary_image").notNull().default(false),
  sequence: integer("sequence").notNull().default(0),
});
