const { User } = require('../models');

const userData = [
    {
    username: "Test1",
    email: "Test@hotmail.com",
    password: "password1234"
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;