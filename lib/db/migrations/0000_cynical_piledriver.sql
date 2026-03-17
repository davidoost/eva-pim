CREATE TABLE "pim_environments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"namespace" text NOT NULL,
	"endpoint" text NOT NULL,
	CONSTRAINT "pim_environments_namespace_unique" UNIQUE("namespace")
);
--> statement-breakpoint
CREATE TABLE "pim_product_content" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"language_id" varchar(2),
	"name" text NOT NULL,
	"short_description" text NOT NULL,
	"long_description" text NOT NULL,
	"published" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pim_product_content_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_content_id" uuid NOT NULL,
	"image_url" text NOT NULL,
	"primary_image" boolean DEFAULT false NOT NULL,
	"sequence" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pim_products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"eva_id" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"last_updated_at" timestamp DEFAULT now() NOT NULL,
	"last_synced_at" timestamp,
	"name" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pim_product_content" ADD CONSTRAINT "pim_product_content_product_id_pim_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."pim_products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pim_product_content_images" ADD CONSTRAINT "pim_product_content_images_product_content_id_pim_product_content_id_fk" FOREIGN KEY ("product_content_id") REFERENCES "public"."pim_product_content"("id") ON DELETE no action ON UPDATE no action;