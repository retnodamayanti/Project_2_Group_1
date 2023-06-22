const { Inventory } = require('../models');

const inventoryData = [
    {
        product_name: "Oak Timber",
        quantity: 50,
        stock_id: 1,
    },
    {
        product_name: "Birch Timber",
        quantity: 30,
        stock_id: 2, 
    },
    {
        product_name: "Wheelbarrows",
        quantity: 10,
        stock_id: 3,
    },
    {
        product_name: "Axe",
        quantity: 40,
        stock_id: 4,
    }
]

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;