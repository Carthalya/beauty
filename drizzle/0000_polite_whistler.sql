CREATE TABLE "fragrance_ingredients" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"family" text NOT NULL,
	"note_type" text NOT NULL,
	"intensity" text NOT NULL,
	"longevity" text NOT NULL,
	"origin" text,
	"ifra" text,
	"recommended_min" integer DEFAULT 0,
	"recommended_max" integer DEFAULT 0,
	"blends_with" jsonb DEFAULT '[]'::jsonb,
	"created_at" text
);
