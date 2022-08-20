const user = require('./user');
const room = require('./room');

user.hasMany(Room, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

room.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Room };
