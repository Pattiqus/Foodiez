// import models
const Recipe = require("./Recipe");
const Ingrediants = require("./Ingrediants");

const RecipeIngrediants = require("./Recipe_Ingrediants");

Recipe.belongsToMany(Ingrediants, {
  // Define the third table needed to store the foreign keys
  through: {
    model: RecipeIngrediants,
    unique: false,
  },
as: 'ri'

});

Ingrediants.belongsToMany(Recipe, {
  // Define the third table needed to store the foreign keys
  through: {
    model: RecipeIngrediants,
    unique: false,
  }, 
  as: 'ri'

});

module.exports = {
  Recipe,
  Ingrediants,
  RecipeIngrediants,
};
