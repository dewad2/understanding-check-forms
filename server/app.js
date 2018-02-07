const express = require('express');
const volleyball = require('volleyball');
const path = require('path');
const data = require('./data');
const db = require('./db');
const Critter = db.model('critter');
const app = express();

app.use(volleyball);
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/dogs', (req, res, next) => {
  Critter.fetchType('dog')
  .then(dogs => res.send(dogs))
  .catch(next);
})

app.get('/api/cats', (req, res, next) => {
  Critter.fetchType('cat')
  .then(cats => res.send(cats))
  .catch(next);
})

app.get('/api/dragons', (req, res, next) => {
  Critter.fetchType('dragon')
  .then(dragons => res.send(dragons))
  .catch(next);
})

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..public/index.html'))
})

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('I is listening.');
    })
  })
