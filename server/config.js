const express    = require('express');
const app        = express();

// static content path set tp public folder
app.use('/',express.static('public'));

module.exports = app;
