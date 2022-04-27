const express = require('express');

const app = express();

/**
 * @type {Array<{name: string, color: string}>}
 */
const animals = [
  {
    name: 'Zebra',
    color: 'Mixed',
  },
  {
    name: 'Lion',
    color: 'Gold',
  },
  {
    name: 'Tiger',
    color: 'Orange',
  },
  {
    name: 'Bear',
    color: 'Brown',
  },
];

//Your code here

app.get('/animals/:id', (req, res) => {
  const { id } = req.params;

  if (+id > animals.length - 1) {
    return res.sendStatus(404);
  }

  const animal = animals[+id];

  res.json(animal);
});

//Do not edit below
app.listen(3000, () => console.log('Listening on port 3000'));
