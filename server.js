const express = require('express');
const { sequelize } = require('./db');
const { Restaurant } = require('./models/Restaurant');

const app = express();
const PORT = 3000;

// TODO 1: Create a new route for the restaurants
app.get('/restaurants', async (req, res) => {
  const restaurants = await Restaurant.findAll();

  res.json(restaurants);
});

app.listen(PORT, () => {
  sequelize.sync();
  console.log(`Example app listening on port ${PORT}!`)
});
