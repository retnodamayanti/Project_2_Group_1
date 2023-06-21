const sequelize = require('../config/connection');

const seedInventory = require('./inventoryData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedInventory();

  process.exit(0);
};

seedAll();
