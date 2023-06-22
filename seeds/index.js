const sequelize = require('../config/connection');
const seedUser = require('./userData')
const seedInventory = require('./inventoryData');


const seedAll = async () => {
  await sequelize.sync({ force: true });
 
  await seedUser();
  
  await seedInventory();

  console.log('Databased seeded')

  process.exit(0);
};

seedAll();
