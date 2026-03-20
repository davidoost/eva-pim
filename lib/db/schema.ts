import {
  boolean,
  decimal,
  integer,
  jsonb,
  pgTable,
  primaryKey,
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
  parentId: uuid("parent_id"),
  evaId: varchar("eva_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  lastUpdatedAt: timestamp("last_updated_at").defaultNow().notNull(),
  lastSyncedAt: timestamp("last_synced_at"),
  name: text("name").notNull(),
  shortDescription: text("short_description"),
  longDescription: text("long_description"),
  taxCode: text("tax_code").notNull(),
  published: boolean("published").notNull().default(false),
  // Hierarchy / variation structure
  childrenVariationProperty: text("children_variation_property"),
  childrenLogicalLevel: text("children_logical_level"),
  variationValue: text("variation_value"),
  // Product identifiers
  brand: text("brand"),
  isDeleted: boolean("is_deleted").default(false),
  // Sync
  contentHash: text("content_hash"),
});

export const productImages = pgTable("pim_product_images", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id),
  imageUrl: text("image_url").notNull(),
  storagePath: text("storage_path"),
  externalUrl: text("external_url"),
  primaryImage: boolean("primary_image").notNull().default(false),
  sequence: integer("sequence").notNull().default(0),
});

// --- New tables ---

export const syncRuns = pgTable("pim_sync_runs", {
  id: uuid().primaryKey().defaultRandom(),
  evaNamespace: text("eva_namespace").notNull(),
  startedAt: timestamp("started_at", { withTimezone: true }).defaultNow(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  status: text("status").default("pending_async"),
  syncType: text("sync_type").default("full"),
  productsSubmitted: integer("products_submitted"),
  asyncToken: text("async_token"),
  requestPayload: jsonb("request_payload"),
  evaResponse: jsonb("eva_response"),
  error: text("error"),
  triggeredBy: text("triggered_by").default("manual"),
});
