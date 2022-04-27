const express = require('express');
const { sequelize } = require('./db');
const { Restaurant } = require('./models/Restaurant');

const app = express();
const PORT = 3000;

/* GET /restaurants - return all restaurants */
app.get('/restaurants', async (req, res) => {
  const restaurants = await Restaurant.findAll();

  res.json(restaurants);
});

/* GET /restaurants/:id - return 1 restaurant by id */
app.get('/restaurants/:id', async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);

  res.json(restaurant);
});

app.listen(PORT, () => {
  sequelize.sync();
  console.log(`Example app listening on port ${PORT}!`);
});
