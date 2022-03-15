const router = require("express").Router();
const {
  Recipe,
  Ingrediants,
  RecipeIngrediants,
  Steps,
  RecipeSteps,
  Image,
} = require("../../models");

const withAuth = require("../../utils/auth");
// const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// cloudinary.config({
//   cloud_name: process.env.cloud_name,
//   api_key:process.env.api_key,
//   api_secret: process.env.api_secret
// });

router.post("/", async (req, res) => {
  const data = req.body;

  const recipeObj = {
    id: parseInt(data.id),
    recipe_name: data.recipe_name,
    preperation_time: parseInt(data.preperation_time),
    user_id: parseInt(data.user_id),
  };

  try {
    
    //step1
    await Recipe.create(recipeObj);

    //step2
    data.ingrediants.map(async (ingredients) => {
      const ingData = {
        id: parseInt(ingredients.id),
        name: ingredients.name,
      };
      await Ingrediants.create(ingData);

      await RecipeIngrediants.create({
        recipe_id: parseInt(data.id),
        ingrediant_id: parseInt(ingredients.id),
      });
    });

    //step3
    data.steps.map(async (step) => {
      const stpData = {
        id: parseInt(step.id),
        name: step.name,
      };
      await Steps.create(stpData);

      await RecipeSteps.create({
        recipe_id: parseInt(data.id),
        step_id: parseInt(step.id),
      });
    });

    //step4
    data.images.map(async(img) => {
      const imgData = {
        image_link: img.image_link,
        recipe_id: parseInt(data.id),
      };
      await Image.create(imgData);

    });

    res.status(200).json(recipeObj);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const Data = await Recipe.findAll({
      include: [
        { model: Ingrediants, through: RecipeIngrediants },
        { model: Steps, through: RecipeSteps },
        { model: Image },
      ],
    });
    res.status(200).json(Data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dbData = await Recipe.findByPk(req.params.id, {
      include: [{ model: Ingrediants, through: RecipeIngrediants },
        { model: Steps, through: RecipeSteps },
        { model: Image },
      ],
    });
    res.status(200).json(dbData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const Data = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!Data) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(Data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
