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
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Preperation_time: {
        type: DataTypes.INTEGER,
        allowNull: false
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