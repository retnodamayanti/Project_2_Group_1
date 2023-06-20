const { Inventory } = require('../models');

const InventoryData = [
    {
        produce_name: 'Oak Timber',
        quantity: 50,
        stock_id: 1,
    },
    {
        produce_name: 'Birch Timber',
        quantity: 30,
        stock_id: 2, 
    },
    {
        produce_name: 'Wheelbarrows',
        quantity: 10,
        stock_id: 3,
    },
    {
        produce_name: 'Axe',
        quantity: 40,
        stock_id: 4,
    }
]

const seedInventory = () => Inventory.bulkCreate(InventoryData);

module.exports = seedInventory;