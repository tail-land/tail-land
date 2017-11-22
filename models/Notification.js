const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    from: String,
    to: String,
    subject: String,
    text: String,
    html: String,
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;