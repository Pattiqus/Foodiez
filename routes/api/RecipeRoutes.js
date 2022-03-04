const router = require("express").Router();
const { Router } = require("express");
const { Recipe,Ingrediants,RecipeIngrediants } = require("../../models");

router.get("/",  async(req, res) => {
    // find all categories
    // be sure to include its associated Products

    try {
      const Data = await Recipe.findAll({
          include: [{ model: Ingrediants, through : RecipeIngrediants}]
      });
      res.status(200).json(Data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports=router;