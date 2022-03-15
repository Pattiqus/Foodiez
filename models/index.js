// import models
const Recipe = require("./Recipe");
const Ingrediants = require("./Ingrediants");
const Image = require("./Image");
const User = require("./User");
const Comments = require("./Comments");
const RecipeIngrediants = require("./Recipe_Ingrediants");

const Steps = require("./Steps");
const RecipeSteps = require("./Recipe_Steps");

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


Recipe.belongsToMany(Steps, {
  // Define the third table needed to store the foreign keys
  through: {
    model: RecipeSteps,
    unique: false,
  }

});

Steps.belongsToMany(Recipe, {
  // Define the third table needed to store the foreign keys
  through: {
    model: RecipeSteps,
    unique: false,
  } 


});

Recipe.hasMany(Image, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE'
});

Image.belongsTo(Recipe)


User.hasMany(Recipe);

Recipe.belongsTo(User)




module.exports = {
  User,
  Recipe,
  Ingrediants,
  RecipeIngrediants,
  Image,
  Steps,
  RecipeSteps,
};
