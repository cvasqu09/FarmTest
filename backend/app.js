const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const farmerRoutes = require('./api/routes/farmers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Allows for cross origin resource sharing since our Mongo may or may not be one the same serving machine
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allows for requests from any domain.
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/farmers', farmerRoutes);

module.exports = app;
