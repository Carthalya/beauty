import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const fragranceIngredients = pgTable("ingredients", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),
  family: text("family").notNull(),
  noteType: text("noteType").notNull(),

  intensity: text("intensity"),
  longevity: text("longevity"),
  ifra: text("ifra"),

  recommendedMin: integer("recommendedMin"),
  recommendedMax: integer("recommendedMax"),

  blendsWith: text("blendsWith").array(),
});