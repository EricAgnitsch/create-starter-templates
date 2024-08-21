CREATE TABLE "public"."permissions" (
	"id" uuid NOT NULL DEFAULT gen_random_uuid(),
	"created_at" timestamp with time zone NOT NULL DEFAULT now(),
	"name" text COLLATE "pg_catalog"."default" NOT NULL,
	"description" text COLLATE "pg_catalog"."default"
);

ALTER TABLE "public"."permissions" ENABLE ROW LEVEL SECURITY;

CREATE UNIQUE INDEX permissions_name_key ON public.permissions USING btree (name);

ALTER TABLE "public"."permissions" ADD CONSTRAINT "permissions_name_key" UNIQUE USING INDEX "permissions_name_key";

CREATE UNIQUE INDEX permissions_pkey ON public.permissions USING btree (id);

ALTER TABLE "public"."permissions" ADD CONSTRAINT "permissions_pkey" PRIMARY KEY USING INDEX "permissions_pkey";

CREATE TABLE "public"."role_permissions" (
	"created_at" timestamp with time zone NOT NULL DEFAULT now(),
	"role_id" uuid NOT NULL,
	"permission_id" uuid NOT NULL
);

ALTER TABLE "public"."role_permissions" ENABLE ROW LEVEL SECURITY;

CREATE UNIQUE INDEX role_permissions_pkey ON public.role_permissions USING btree (role_id, permission_id);

ALTER TABLE "public"."role_permissions" ADD CONSTRAINT "role_permissions_pkey" PRIMARY KEY USING INDEX "role_permissions_pkey";

ALTER TABLE "public"."role_permissions" ADD CONSTRAINT "role_permissions_permission_id_fkey" FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE;

CREATE TABLE "public"."roles" (
	"id" uuid NOT NULL DEFAULT gen_random_uuid(),
	"created_at" timestamp with time zone NOT NULL DEFAULT now(),
	"name" text COLLATE "pg_catalog"."default" NOT NULL,
	"description" text COLLATE "pg_catalog"."default"
);

ALTER TABLE "public"."roles" ENABLE ROW LEVEL SECURITY;

CREATE UNIQUE INDEX roles_name_key ON public.roles USING btree (name);

ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_name_key" UNIQUE USING INDEX "roles_name_key";

CREATE UNIQUE INDEX roles_pkey ON public.roles USING btree (id);

ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_pkey" PRIMARY KEY USING INDEX "roles_pkey";

ALTER TABLE "public"."role_permissions" ADD CONSTRAINT "role_permissions_role_id_fkey" FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE;

REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA "public" FROM "anon";

REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA "public" FROM "authenticated";