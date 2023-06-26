const { Tools } = require('../models');

const toolsData = [
    {
        product_name: "Wheelbarrows",
        quantity: 15,
        stock_id: 1,
        description: "This product is designed for carrying loose bricks, rocks and concrete, soil or plants around your yard with the utmost durability and convenience",
    },
    {
        product_name: "Axe",
        quantity: 40,
        stock_id: 2,
        description: "This product is perfect for chopping up firewood or felling a tree. The axe features a durable carbon steel head and light weight, but strong fibreglass handle.",
    },
    {
        product_name: "Hammer",
        quantity: 32,
        stock_id: 3,
        description: "A hammer is a versatile hand tool used for driving nails, removing nails, and general construction tasks."
    },
    {
        product_name: "Screwdriver",
        quantity: 67,
        stock_id: 4,
        description: "Screwdrivers come in various sizes and types, but they are all designed to turn screws.",
    }

]

const seedTools = () => Tools.bulkCreate(toolsData);

module.exports = seedTools;