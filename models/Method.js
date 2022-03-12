const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Method extends Model {}

Method.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    step: {
        type: DataTypes.STRING,
        allowNull: false,
    }
        
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'method',
  }
);


module.exports = Method;