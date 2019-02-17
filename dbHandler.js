'use strict';

var mysql = require('mysql');
const config = require('./config.json');

//local mysql db connection
var connection = mysql.createConnection(config);

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;