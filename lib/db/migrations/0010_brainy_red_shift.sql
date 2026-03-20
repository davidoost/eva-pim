ALTER TABLE "pim_products" RENAME COLUMN "variation_values" TO "variation_value";--> statement-breakpoint
ALTER TABLE "pim_products" ALTER COLUMN "tax_code" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "custom_id";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "ledger_class_id";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "manufacturer_id";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "country_of_origin_id";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "commodity_code";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "type_stock";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "type_service";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "type_gift_card";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "type_bundle";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "type_insurance";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "type_subscription";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "type_allow_custom_pricing";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "status_non_sellable";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "status_disable_backorder";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "status_disable_delivery";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "status_disable_pickup";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "status_delivery_only";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "status_pre_release";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "status_use_up";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "require_serial_number";--> statement-breakpoint
ALTER TABLE "pim_products" DROP COLUMN "serial_number_config_id";