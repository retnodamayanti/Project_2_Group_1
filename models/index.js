const Inventory = require('./Inventory');
const User = require('./user');

User.hasMany(Inventory, {
    foreignKey: 'user_id'
});

Inventory.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Inventory };