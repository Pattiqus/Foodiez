const router = require("express").Router();
const { Router } = require("express");
const { Recipe, Ingrediants, RecipeIngrediants } = require("../../models");

router.post("/", async (req, res) => {
  let rID = Math.floor(Math.random() * 500);

  const data = {
    id: rID,
    recipe_name: "pizza",
    Preperation_time: 30,
    ingrediants: [
      {
        name: "onion",
      },
      {
        name: "carrot",
      },
    ],
  };

  const recipeObj ={
    id: data.id,
    recipe_name: data.recipe_name,
    Preperation_time: data.Preperation_time,
  }

  try {
    console.log(recipeObj)
     await Recipe.create(
      recipeObj
    );

    data.ingrediants.map(async(ingredients) => {
      let iID = Math.floor(Math.random() * 2000);
      const ingData={
       id: iID,
      name:ingredients.name
      }
      await Ingrediants.create(
            ingData
      );

      await RecipeIngrediants.create({
        recipe_id: rID,
        ingrediants_id: iID,
      });
    });

    res.status(200).json(recipeObj);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const Data = await Recipe.findAll({
      include: [{ model: Ingrediants, through: RecipeIngrediants }],
    });
    res.status(200).json(Data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
