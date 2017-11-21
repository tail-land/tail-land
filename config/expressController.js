const session = require('express-session');
const mongoose = require('mongoose');
const config = require('./config');

module.exports = function(app){
  console.log(config.db);
  mongoose.connect(config.db)
    .then(console.log("connected"));

};
