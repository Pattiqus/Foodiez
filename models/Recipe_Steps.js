const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class RecipeSteps extends Model {}

RecipeSteps.init(
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
  step_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: "steps",
        key: "id"
    },
}



  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe_steps',
  }
);

module.exports = RecipeSteps;
