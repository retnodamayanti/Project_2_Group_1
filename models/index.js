const Inventory = require('./Inventory');
const User = require('./user');
const Tools = require('./tools')

User.hasMany(Inventory, {
    foreignKey: 'user_id'
});

Inventory.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Tools, {
   foreignKey: 'user_id' 
})

Tools.belongsTo(User, {
    foreignKey: 'user_id'
})


module.exports = { User, Inventory, Tools };