"use client";

import { useEffect, useState } from "react";

import AddIngredientModal from "@/components/admin/ingredients/AddIngredientModal";

import type { Ingredient } from "@/types/fragrance";

export default function FragranceIngredientsPage() {
  const [ingredientsList, setIngredientsList] =
    useState<Ingredient[]>([]);

  const [search, setSearch] =
    useState("");

  const [editingIngredient, setEditingIngredient] =
    useState<Ingredient | null>(null);

  /* ======================
      LOAD FROM DATABASE
  ====================== */

  async function loadIngredients() {
    try {
      const res =
        await fetch(
          "/api/fragrance/ingredients"
        );

      const result =
        await res.json();

      setIngredientsList(
        result.data || []
      );

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadIngredients();
  }, []);

  /* ======================
      DELETE
  ====================== */

  async function deleteIngredient(
    id:string | number
  ) {
    try {
      await fetch(
        "/api/fragrance/ingredients",
        {
          method: "DELETE",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            id,
          }),
        }
      );

      await loadIngredients();

    } catch (err) {
      console.log(err);
    }
  }

  /* ======================
      ADD / UPDATE
  ====================== */

  async function saveIngredient(
    ingredient: Ingredient
  ) {
    try {
      const method =
        editingIngredient
          ? "PUT"
          : "POST";

      const res =
        await fetch(
          "/api/fragrance/ingredients",
          {
            method,

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                ingredient
              ),
          }
        );

      const result =
        await res.json();

      console.log(result);

      if (!result.success)
        return;

      await loadIngredients();

      setEditingIngredient(
        null
      );

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>

        <p
          className="
          text-sm
          tracking-[4px]
          text-[#8B735C]
        "
        >
          CARTHALYA FRAGRANCE
        </p>

        <h1
          className="
          text-4xl
          font-bold
          text-[#3F3126]
          mt-2
        "
        >
          Ingredients Library
        </h1>

        <p
          className="
          text-[#6B5A4B]
          mt-2
        "
        >
          Manage fragrance ingredients database
        </p>

      </div>

      {/* CONTENT */}

      <div
        className="
        bg-white
        rounded-[30px]
        border
        border-[#E8DED2]
        p-6
      "
      >

        {/* TOP */}

        <div
          className="
          flex
          justify-between
          items-center
          mb-6
        "
        >

          <input
            value={search}

            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }

            placeholder="Search ingredient..."

            className="
            w-[300px]
            bg-[#F8F5F0]
            rounded-2xl
            px-5
            py-3
            outline-none
            border
            border-[#EFE7DC]
          "
          />

          <AddIngredientModal
            editData={
              editingIngredient ||
              undefined
            }

            onAdd={
              saveIngredient
            }
          />

        </div>

        {/* EMPTY */}

        {
          ingredientsList.length ===
            0 && (

            <div
              className="
              p-16
              rounded-[28px]
              bg-[#F8F5F0]
              text-center
            "
            >

              <div
                className="
                text-6xl
              "
              >
                🧪
              </div>

              <h3
                className="
                text-2xl
                font-bold
                mt-5
              "
              >
                No ingredients yet
              </h3>

            </div>

          )
        }

        {/* LIST */}

        <div
          className="
          space-y-5
        "
        >

          {
            ingredientsList

              .filter(
                (item) =>
                  item.name
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
              )

              .map(
                (item) => (

                  <div
                    key={item.id}

                    className="
                    p-6
                    rounded-[28px]
                    bg-[#F8F5F0]
                    space-y-5
                  "
                  >

                    <div
                      className="
                      flex
                      justify-between
                    "
                    >

                      <div>

                        <h3
                          className="
                          text-xl
                          font-semibold
                        "
                        >
                          {
                            item.name
                          }
                        </h3>

                        <p>
                          {
                            item.family
                          }
                        </p>

                      </div>

                      <div
                        className="
                        px-4
                        py-2
                        rounded-xl
                        bg-white
                      "
                      >
                        {
                          item.noteType
                        }
                      </div>

                    </div>

                    <div
                      className="
                      grid
                      md:grid-cols-3
                      gap-4
                    "
                    >

                      <p>
                        Intensity:
                        {
                          item.intensity
                        }
                      </p>

                      <p>
                        Longevity:
                        {
                          item.longevity
                        }
                      </p>

                      <p>
                        IFRA:
                        {
                          item.ifra
                        }
                      </p>

                    </div>

                    <div>

                      {
                        item.blendsWith?.map(
                          (
                            blend
                          ) => (

                            <span
                              key={
                                blend
                              }

                              className="
                              mr-2
                            "
                            >
                              {
                                blend
                              }
                            </span>

                          )
                        )
                      }

                    </div>

                    <div
                      className="
                      flex
                      justify-end
                      gap-3
                    "
                    >

                      <button
                        onClick={() =>
                          setEditingIngredient(
                            item
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteIngredient(
                            Number(
                              item.id
                            )
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                )
              )
          }

        </div>

      </div>

    </div>
  );
}