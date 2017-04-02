const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// set up the express app
const app = express();

// log requests to the console
app.use(logger('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// setup a default catch all route that sends back welcome message in JSON format
app.get('*', (req, res) => res.status(200).send({
	message: 'welcome to the beginning of nothingness'
}));

module.exports = app;