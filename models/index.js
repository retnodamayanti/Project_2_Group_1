const User = require('./User');
const Category = require('./Category');
const Inventory = require('./Inventory');
const Tools = require('./tools')

Category.hasMany(Inventory, {
    foreignKey: 'category_id',
});

Inventory.belongsTo(Category, {
    foreignKey: 'category_id'
})


module.exports = { User, Inventory, Category, Tools };