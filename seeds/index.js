const sequelize = require('../config/connection');
const seedInventory = require('./inventoryData');

const userData = require('./userData.json')
const { User } = require('../models')

const seedAll = async () => {
  await sequelize.sync({ force: true });
 
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await seedInventory();

  console.log('Databased seeded')

  process.exit(0);
};

seedAll();
