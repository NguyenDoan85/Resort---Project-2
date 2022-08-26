const sequelize = require('../config/connection');
const seedRoom = require('./roomData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRoom();

  process.exit(0);
};

seedAll();
