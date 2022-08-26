const sequelize = require('../config/connection');
const { User, Room } = require('../models');

// const seedRoom = require('./roomData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const room of roomData) {
  //   await Room.create({
  //     ...room,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }
  await seedRoom();

  process.exit(0);
};

seedAll();
