const sequelize = require('../config/connection');
const { User, Recipe, Ingrediants, Steps, RecipeIngrediants, RecipeSteps, Image   } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const ingrediantsData = require('./ingrediantsData.json');
const stepsData = require("./stepsData.json");
const imageData = require('./imageData.json');
const RecipeIngrediantsData  = require('./recipeIngrediantsData.json');
const RecipeStepsData = require('./recipeStepsData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const recipe = await Recipe.bulkCreate(recipeData, {
    individualHooks: true
  })

  for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  const ingrediants = await Ingrediants.bulkCreate(ingrediantsData, {
    individualHooks: true,
    returning: true,
  });

  for (const ingrediants of ingrediantsData) {
    await Ingrediants.create({
      ...ingrediants,
      recipe_id: recipe[Math.floor(Math.random() * recipe.length)].id,
    });
  }



  
  process.exit(0);
};

seedDatabase();
