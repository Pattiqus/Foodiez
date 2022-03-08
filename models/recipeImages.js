const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Recipe extends Model {}

Recipe.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recipe_image_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reipe_id: {
        
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;