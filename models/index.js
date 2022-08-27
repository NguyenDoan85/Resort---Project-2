const User = require('./User');
const Room = require('./Room');

user.hasMany(room, {

  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

room.belongsTo(user, {

  foreignKey: 'user_id',
});

module.exports = { user, room };
