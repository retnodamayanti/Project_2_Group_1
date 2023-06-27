const { Inventory } = require('../models');

const inventoryData = [
    {
        product_name: "Oak Timber",
        quantity: 50,
        stock_id: 1,
        filename: '01-Oak Timber.jpg',
        description: "Oak wood is a type of hardwood that derives from the oak tree native to the northern hemisphere. There are around 600 species of oak, both deciduous and evergreen",
    },
    {
        product_name: "Birch Timber",
        quantity: 30,
        stock_id: 2,
        filename: '02-Birch Timber.jpg',
        description: "Birch is a native hardwood that comes from the genus Betula. There are over a dozen species of birch trees native to North America, but the most common are white birch, yellow birch, and black birch. Yellow birch and white birch are the two most commonly found in woodworking.",
    },
    {
        product_name: "Bricks",
        quantity: 100,
        stock_id: 3,
        filename: '03-Bricks.jpg',
        description: "construction material used to build walls, pavements and other elements in masonry construction. ",
    },
    {
        product_name: "Steel Beams",
        quantity: 40,
        stock_id: 4,
        filename: '04-Steel Beams.jpg',
        description: "Steel beams are structural components that are commonly used in construction to provide support and stability to buildings and other structures. They are made of steel, which is known for its strength and load-bearing capacity.",
    }
]

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;