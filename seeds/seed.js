const sequelize = require('../config/connection');
const { User, Recipe, Ingrediants, Steps, RecipeIngrediants, RecipeSteps, Image } = require('../models');

const userSeed = require('./userData.js');
const recipeSeed = require('./recipeData.js');
const ingrediantsSeed = require('./ingrediantsData.js');
const stepSeed = require("./stepsData.js");
const imageSeed = require('./imageData.js');
const recipeIngrediantsSeed  = require('./recipeIngrediantsData.js');
const recipeStepsSeed = require('./recipeStepsData.js');


const seedAll = async () => {
  await sequelize.query('SET FOREIGN_KEY_CHECKS=0')
   .then(() => {
     return sequelize.sync({ force: true });
   });
  await imageSeed();
  await userSeed();
  await recipeSeed();
  await ingrediantsSeed();
  await stepSeed();
  await recipeStepsSeed();
  await recipeIngrediantsSeed();
  process.exit(0);
};


seedAll();
