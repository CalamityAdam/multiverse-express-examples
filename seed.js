const { Restaurant } = require('./models/Restaurant');
const seedData = require('./seedData');
const { sequelize } = require('./db');

async function syncSeed() {
  await sequelize.sync({ force: true });
  await Restaurant.bulkCreate(seedData);
}

syncSeed();
