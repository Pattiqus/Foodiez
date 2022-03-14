const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Steps extends Model {}

Steps.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
     
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'steps',
  }
);

module.exports = Steps;