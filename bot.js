const dotenv = require('dotenv').load();
const heartbeat = require('./heartbeat');
const catfacts = require('./catfacts');
const giphy = require('./giphy');

heartbeat.start();
catfacts.start();
giphy.start();
