const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name       : { type: String, required: [true, 'A dónde vas sin nombre cuerpo escombro?'] },
  occupation : String,
  catchPhrase: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
