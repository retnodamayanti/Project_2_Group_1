const { Inventory } = require('../models');

const inventoryData = [
    {
        product_name: "Oak Timber",
        quantity: 50,
        stock_id: 1,
        description: "Oak wood is a type of hardwood that derives from the oak tree native to the northern hemisphere. There are around 600 species of oak, both deciduous and evergreen",
    },
    {
        product_name: "Birch Timber",
        quantity: 30,
        stock_id: 2, 
        description: "Birch is a native hardwood that comes from the genus Betula. There are over a dozen species of birch trees native to North America, but the most common are white birch, yellow birch, and black birch. Yellow birch and white birch are the two most commonly found in woodworking.",
    },
    {
        product_name: "Wheelbarrows",
        quantity: 10,
        stock_id: 3,
        description: "This product is designed for carrying loose bricks, rocks and concrete, soil or plants around your yard with the utmost durability and convenience",
    },
    {
        product_name: "Axe",
        quantity: 40,
        stock_id: 4,
        description: "This product is perfect for chopping up firewood or felling a tree. The axe features a durable carbon steel head and light weight, but strong fibreglass handle.",
    }
]

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;