const user = require('./user');
const room = require('./room');

user.hasMany(room, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

room.belongsTo(user, {
  foreignKey: 'user_id',
});

module.exports = { user, room };
