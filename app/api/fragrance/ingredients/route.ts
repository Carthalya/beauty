import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { fragranceIngredients } from "@/lib/db/schema/fragranceIngredients";
import { eq } from "drizzle-orm";

// GET
export async function GET() {
  const data = await db.select().from(fragranceIngredients);

  return NextResponse.json({
    success: true,
    data,
  });
}

// POST
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await db
      .insert(fragranceIngredients)
      .values({
        name: body.name,
        family: body.family,
        noteType: body.noteType,

        // ⚠️ لازم قيم مش null
        intensity: body.intensity || "Medium",
        longevity: body.longevity || "Medium",

        origin: body.origin ?? "",
        ifra: body.ifra ?? "",

        recommendedMin: body.recommendedPercentage?.min ?? 0,
        recommendedMax: body.recommendedPercentage?.max ?? 0,

        // ⚠️ JSONB لازم array clean
        blendsWith: body.blendsWith ?? [],

        createdAt: new Date().toISOString(),
      })
      .returning();

    console.log("INSERT OK:", result);

    return NextResponse.json({
      success: true,
      data: result[0],
    });
  } catch (err) {
    console.log("INSERT ERROR:", err);

    return NextResponse.json({
      success: false,
      error: String(err),
    });
  }
}