import { pgTable, serial, text, integer, jsonb } from "drizzle-orm/pg-core";

export const fragranceIngredients = pgTable("fragrance_ingredients", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),
  family: text("family").notNull(), // Citrus, Floral, Woody...
  noteType: text("note_type").notNull(), // Top / Heart / Base

  intensity: text("intensity").notNull(), // Low / Medium / High
  longevity: text("longevity").notNull(), // Low / Medium / High

  origin: text("origin"),
  ifra: text("ifra"),

  // range % (min/max)
  recommendedMin: integer("recommended_min").default(0),
  recommendedMax: integer("recommended_max").default(0),

  // array of strings (blends with other ingredients)
  blendsWith: jsonb("blends_with").default([]),

  createdAt: text("created_at"),
});