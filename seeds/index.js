const sequelize = require('../config/connection');
const seedInventory = require('./inventoryData' );
const seedTools = require('./toolsData')

const userData = require('./userData.json')
const { User } = require('../models')

const seedAll = async () => {
  await sequelize.sync({ force: true });
 
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await seedInventory();

  await seedTools();

  console.log('Databased seeded')

  process.exit(0);
};

seedAll();
