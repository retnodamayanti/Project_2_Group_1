const express = require('express');
const routes = require('./controllers');
// import sequelize connection

const connection = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

const startServer = async () => {
await connection.sync({ force: false });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

};

startServer();