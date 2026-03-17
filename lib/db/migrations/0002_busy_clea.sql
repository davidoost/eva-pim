CREATE TABLE "pim_product_variations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"variation_property" text NOT NULL,
	"variation_value" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pim_product_content_images" RENAME TO "pim_product_images";--> statement-breakpoint
ALTER TABLE "pim_product_content" RENAME TO "pim_product_translations";--> statement-breakpoint
ALTER TABLE "pim_product_translations" DROP CONSTRAINT "pim_product_content_product_id_pim_products_id_fk";
--> statement-breakpoint
ALTER TABLE "pim_product_images" DROP CONSTRAINT "pim_product_content_images_product_content_id_pim_product_content_id_fk";
--> statement-breakpoint
ALTER TABLE "pim_product_images" ADD COLUMN "product_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "short_description" text;--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "long_description" text;--> statement-breakpoint
ALTER TABLE "pim_products" ADD COLUMN "published" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "pim_product_variations" ADD CONSTRAINT "pim_product_variations_product_id_pim_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."pim_products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pim_product_translations" ADD CONSTRAINT "pim_product_translations_product_id_pim_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."pim_products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pim_product_images" ADD CONSTRAINT "pim_product_images_product_id_pim_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."pim_products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pim_product_translations" DROP COLUMN "published";--> statement-breakpoint
ALTER TABLE "pim_product_images" DROP COLUMN "product_content_id";