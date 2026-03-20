-- Extend pim_products with new columns
ALTER TABLE "pim_products" ADD COLUMN "parent_id" uuid REFERENCES "pim_products"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "children_variation_property" text;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "children_logical_level" text;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "variation_values" jsonb;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "brand" text;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "custom_id" text;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "ledger_class_id" text;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "manufacturer_id" text;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "country_of_origin_id" text;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "commodity_code" text;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "is_deleted" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "type_stock" boolean DEFAULT true;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "type_service" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "type_gift_card" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "type_bundle" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "type_insurance" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "type_subscription" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "type_allow_custom_pricing" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "status_non_sellable" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "status_disable_backorder" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "status_disable_delivery" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "status_disable_pickup" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "status_delivery_only" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "status_pre_release" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "status_use_up" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "require_serial_number" boolean DEFAULT false;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "serial_number_config_id" integer;
--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "content_hash" text;
--> statement-breakpoint

-- Extend pim_product_images with new columns
ALTER TABLE "pim_product_images" ADD COLUMN "storage_path" text;
--> statement-breakpoint
ALTER TABLE "pim_product_images" ADD COLUMN "external_url" text;
--> statement-breakpoint

-- New table: pim_product_content
CREATE TABLE "pim_product_content" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"eva_namespace" text NOT NULL,
	"product_id" uuid NOT NULL,
	"language_id" text,
	"country_id" text,
	"name" text,
	"short_description" text,
	"long_description" text,
	"marketing_description" text,
	"tags" text[],
	"publication_statuses" text[] DEFAULT ARRAY['public'],
	"custom_content" jsonb DEFAULT '{}',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pim_product_content" ADD CONSTRAINT "pim_product_content_product_id_pim_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."pim_products"("id") ON DELETE CASCADE ON UPDATE no action;
--> statement-breakpoint

-- New table: pim_product_barcodes
CREATE TABLE "pim_product_barcodes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"eva_namespace" text NOT NULL,
	"product_id" uuid NOT NULL,
	"barcode" text NOT NULL,
	"quantity" decimal,
	"unit_of_measure" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pim_product_barcodes" ADD CONSTRAINT "pim_product_barcodes_product_id_pim_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."pim_products"("id") ON DELETE CASCADE ON UPDATE no action;
--> statement-breakpoint

-- New table: pim_product_assortments
CREATE TABLE "pim_product_assortments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"eva_namespace" text NOT NULL,
	"product_id" uuid NOT NULL,
	"assortment_code" text NOT NULL,
	"start_date" timestamptz,
	"end_date" timestamptz,
	"announcement_date" timestamptz,
	"pre_sale_date" timestamptz,
	"shipment_date" timestamptz,
	"product_status" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pim_product_assortments" ADD CONSTRAINT "pim_product_assortments_product_id_pim_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."pim_products"("id") ON DELETE CASCADE ON UPDATE no action;
--> statement-breakpoint

-- New table: pim_custom_property_types
CREATE TABLE "pim_custom_property_types" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"eva_namespace" text NOT NULL,
	"property_type_id" text NOT NULL,
	"category_id" text DEFAULT 'default',
	"data_type" integer DEFAULT 0,
	"index_type" integer DEFAULT 3,
	"is_array" boolean DEFAULT false,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint

-- New table: pim_sync_runs
CREATE TABLE "pim_sync_runs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"eva_namespace" text NOT NULL,
	"started_at" timestamptz DEFAULT now(),
	"completed_at" timestamptz,
	"status" text DEFAULT 'pending_async',
	"sync_type" text DEFAULT 'full',
	"products_submitted" integer,
	"async_token" text,
	"eva_response" jsonb,
	"error" text,
	"triggered_by" text DEFAULT 'manual'
);
--> statement-breakpoint

-- New table: pim_languages
CREATE TABLE "pim_languages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"eva_namespace" text NOT NULL,
	"lang_id" text NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint

-- New table: pim_config
CREATE TABLE "pim_config" (
	"eva_namespace" text NOT NULL,
	"key" text NOT NULL,
	"value" text,
	PRIMARY KEY ("eva_namespace", "key")
);
