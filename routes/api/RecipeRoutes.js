const router = require("express").Router();
const { Router } = require("express");
const { Recipe,Ingrediants,RecipeIngrediants } = require("../../models");



router.post('/',async (req, res) => {
  try {
    const newData = await Recipe.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

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