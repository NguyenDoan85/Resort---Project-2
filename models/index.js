const Guest = require('./guest');
const Room = require('./room');
const Table = require('./table');
const Manager = require('./manager');

Table.belongsTo(Guest, {
  foreignKey: 'guest_id',
  onDelete: 'cascade'
});

Guest.hasOne(Room, {
  foreignKey: 'room_id',
});

Guest.hasOne(Table, {
  foreignKey: 'table_id',
});

Room.belongsTo(Guest, {
  foreignKey: 'guest_id',
});

module.exports = { Guest, Room, Table, Manager };
