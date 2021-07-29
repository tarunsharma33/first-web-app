var path = require("path");
var express = require("express");
var chalk = require("chalk");
var cors = require("cors");
var dotenv = require('dotenv').config(process.cwd(), './.env');
// server setup
var app = express();
app.use(cors());

// express config

require('./config/express')(app);
require('./routes')(app);

app.listen(process.env.PORT, process.env.IP, function () {
    console.log(chalk.greenBright('Hey! my server listening on http://%s:%d in %s mode'), process.env.IP, process.env.PORT, app.get('env'))
})


module.exports = app;



