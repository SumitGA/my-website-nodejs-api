const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


// set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the begining of nothingness',
}));

module.exports = app;
