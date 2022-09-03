const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Room extends Model {}

Room.init(
  {
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    checkin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'room',
  }
);

module.exports = Room;