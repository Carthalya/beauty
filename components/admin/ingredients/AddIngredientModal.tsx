"use client";
import type {
Ingredient
}
from "@/types/fragrance";
import { useState, useEffect } from "react";

/* =========================
   FORM TYPE (IMPORTANT)
========================= */
type Props = {
onAdd: (
ingredient: Ingredient
) => void | Promise<void>;

editData?: Ingredient;
};

export default function AddIngredientModal({
  onAdd,
  editData,
}: Props) {
  const [open, setOpen] = useState(false);

  const [form,setForm]
=
useState<
Ingredient
>({
    name: "",
    family: "Citrus",
    noteType: "Top",

    intensity: "Medium",
    longevity: "Medium",

    origin: "",
    ifra: "",

    recommendedPercentage: {
      min: 0,
      max: 0,
    },

    blendsWith: [],
  });

  /* =========================
     EDIT MODE
  ========================= */
  useEffect(() => {
    if (editData) {
      setForm(editData);
      setOpen(true);
    }
  }, [editData]);

  /* =========================
     SAVE
  ========================= */
  function handleSave() {
    if (!form.name) return;

    onAdd(form);

    setOpen(false);

    setForm({
      name: "",
      family: "Citrus",
      noteType: "Top",
      intensity: "Medium",
      longevity: "Medium",
      origin: "",
      ifra: "",
      recommendedPercentage: { min: 0, max: 0 },
      blendsWith: [],
    });
  }

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-3 rounded-2xl bg-[#6A4E36] text-white"
      >
        + Add Ingredient
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/30 flex justify-end z-50">
          <div className="w-[650px] h-full bg-white p-8 overflow-y-auto shadow-2xl">

            {/* HEADER */}
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">
                {editData ? "Edit Ingredient" : "Add Ingredient"}
              </h2>

              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* FORM */}
            <div className="space-y-6 mt-6">

              {/* NAME */}
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full p-3 border rounded-xl"
              />

              {/* FAMILY */}
              <select
                value={form.family}
                onChange={(e) =>
                  setForm({ ...form, family: e.target.value })
                }
                className="w-full p-3 border rounded-xl"
              >
                <option>Citrus</option>
                <option>Floral</option>
                <option>Woody</option>
                <option>Oriental</option>
                <option>Gourmand</option>
              </select>

              {/* NOTE TYPE */}
              <select
                value={form.noteType}
                onChange={(e) =>
                  setForm({
                    ...form,
                    noteType: e.target.value as
                      | "Top"
                      | "Heart"
                      | "Base",
                  })
                }
                className="w-full p-3 border rounded-xl"
              >
                <option>Top</option>
                <option>Heart</option>
                <option>Base</option>
              </select>

              {/* ORIGIN */}
              <input
                placeholder="Origin"
                value={form.origin}
                onChange={(e) =>
                  setForm({ ...form, origin: e.target.value })
                }
                className="w-full p-3 border rounded-xl"
              />

              {/* IFRA */}
              <input
                placeholder="IFRA"
                value={form.ifra}
                onChange={(e) =>
                  setForm({ ...form, ifra: e.target.value })
                }
                className="w-full p-3 border rounded-xl"
              />

              {/* INTENSITY */}
              <select
                value={form.intensity}
                onChange={(e) =>
                  setForm({
                    ...form,
                    intensity: e.target.value as
                      | "Low"
                      | "Medium"
                      | "High",
                  })
                }
                className="w-full p-3 border rounded-xl"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              {/* LONGETIVITY */}
              <select
                value={form.longevity}
                onChange={(e) =>
                  setForm({
                    ...form,
                    longevity: e.target.value as
                      | "Low"
                      | "Medium"
                      | "High",
                  })
                }
                className="w-full p-3 border rounded-xl"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              {/* RECOMMENDED % */}
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={form.recommendedPercentage.min}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      recommendedPercentage: {
                        ...form.recommendedPercentage,
                        min: Number(e.target.value),
                      },
                    })
                  }
                  className="w-full p-3 border rounded-xl"
                />

                <input
                  type="number"
                  placeholder="Max"
                  value={form.recommendedPercentage.max}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      recommendedPercentage: {
                        ...form.recommendedPercentage,
                        max: Number(e.target.value),
                      },
                    })
                  }
                  className="w-full p-3 border rounded-xl"
                />
              </div>

              {/* BLENDS */}
              <input
                placeholder="Blends With (comma separated)"
                value={form.blendsWith.join(", ")}
                onChange={(e) =>
                  setForm({
                    ...form,
                    blendsWith: e.target.value
                      .split(",")
                      .map((x) => x.trim())
                      .filter(Boolean),
                  })
                }
                className="w-full p-3 border rounded-xl"
              />

              {/* SAVE */}
              <button
                onClick={handleSave}
                className="w-full bg-[#6A4E36] text-white p-3 rounded-xl"
              >
                {editData ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}