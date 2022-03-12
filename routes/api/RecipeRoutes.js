const router = require("express").Router();
const { Router } = require("express");
const { Recipe, Ingrediants, RecipeIngrediants, Method } = require("../../models");
const RecipeMethods = require("../../models/Recipe_Method");

router.post("/", async (req, res) => {
  const data = req.body;

  const recipeObj = {
    id: parseInt(data.id),
    recipe_name: data.recipe_name,
    preperation_time:parseInt(data.preperation_time),
  };

  try {
    console.log(recipeObj);
    await Recipe.create(recipeObj);

  data.ingrediants.map(async (ingredients) => {
    const ingData = {
      id: parseInt(ingredients.id),
      name: ingredients.name,
    };
    await Ingrediants.create(ingData);

    await RecipeIngrediants.create({
      recipe_id: parseInt(data.id),
      ingrediants_id: parseInt(ingredients.id)
    });
  });

  data.Method.map(async (method) => {
    const ingData = {
      id: parseInt(method.id),
      name: method.step,
    };
    await Method.create(ingData);

    await RecipeMethods.create({
      recipe_id: parseInt(data.id),
      method_id: parseInt(method.id)
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
