const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class RecipeIngrediants extends Model {}

RecipeIngrediants.init(
  {

     // define columns
     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe_ingrediants',
  }
);

module.exports = RecipeIngrediants;
