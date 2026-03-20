CREATE TABLE "pim_migration_files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"environment_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"json" jsonb NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pim_migration_files" ADD CONSTRAINT "pim_migration_files_environment_id_pim_environments_id_fk" FOREIGN KEY ("environment_id") REFERENCES "public"."pim_environments"("id") ON DELETE no action ON UPDATE no action;