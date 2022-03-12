const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class RecipeMethod extends Model {}

RecipeMethod.init(
  {
     // define columns
     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "recipe",
            key: "id"
        },
    },
    method_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "method",
            key: "id"
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe_method',
  }
);

module.exports = RecipeMethod;
