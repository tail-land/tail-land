const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tailSchema = new Schema({
  name: { type: String, required: [true, 'needed name'] },
  time_max : { type: String, required: [true, 'needed time max'] },
  tail_user : {type: [String]},
  creator: String,
});

const Tail = mongoose.model('Tail', tailSchema);
module.exports = Tail;
