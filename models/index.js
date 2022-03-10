// import models
const Recipe = require("./Recipe");
const Ingrediants = require("./Ingrediants");
const Image = require("./Image");

const RecipeIngrediants = require("./Recipe_Ingrediants");

Recipe.belongsToMany(Ingrediants, {
  // Define the third table needed to store the foreign keys
  through: {
    model: RecipeIngrediants,
    unique: false,
  }

});

Ingrediants.belongsToMany(Recipe, {
  // Define the third table needed to store the foreign keys
  through: {
    model: RecipeIngrediants,
    unique: false,
  } 


});


Recipe.hasMany(Image, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE'
});



module.exports = {
  Recipe,
  Ingrediants,
  RecipeIngrediants,
  Image
};
