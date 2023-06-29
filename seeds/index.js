const sequelize = require('../config/connection');
const seedTools = require('./toolsData')

const userData = require('./userData.json')
const inventoryData = require('./inventoryData.json')
const categoryData = require('./categoryData.json')
const { User } = require('../models')
const { Inventory } = require('../models');
const { Category } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });
 
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });
  
  await Inventory.bulkCreate(inventoryData, {
    individualHooks: true,
    returning: true,
  });
  await seedTools();

  console.log('Databased seeded')

  process.exit(0);
};

seedAll();
