const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Image extends Model {}

Image.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image_link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: "recipe",
          key: "id"
      }
  }
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Image',
  }
);

module.exports = Image;