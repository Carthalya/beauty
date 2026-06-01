export type Ingredient = {
  id?: number;

  name: string;

  family: string;

  noteType:
    | "Top"
    | "Heart"
    | "Base";

  intensity:
    | "Low"
    | "Medium"
    | "High";

  longevity:
    | "Low"
    | "Medium"
    | "High";

  origin: string;

  ifra: string;

  recommendedPercentage: {
    min: number;
    max: number;
  };

  blendsWith: string[];
};