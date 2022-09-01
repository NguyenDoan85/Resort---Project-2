const User = require('./user');
const Room = require('./room');

User.hasMany(Room, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Room.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Room };
