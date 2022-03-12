// import models
const Recipe = require("./Recipe");
const Ingrediants = require("./Ingrediants");
const Image = require("./Image");
const Method = require("./Method");

const RecipeIngrediants = require("./Recipe_Ingrediants");
const RecipeMethod = require("./Recipe_Method");

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

Method.belongsTo(Recipe, {
  // # Define : Table for storing
  through: {
    model: RecipeMethod,
    unique: false,
  } 
})

Recipe.hasMany(Image, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE'
});



module.exports = {
  Recipe,
  Ingrediants,
  RecipeIngrediants,
  Image,
  Method,
  RecipeMethod
};
