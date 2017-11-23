const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require('../models/User');
const moment = require('moment');

const tailSchema = new Schema({
  name: { type: String, required: [true, 'needed name'] },
  time_max : { type: String, required: [true, 'needed time max'] },
  tail_user : [{type:Schema.Types.ObjectId , ref:"User"}],
  creator: String,
});

//
// tailSchema.virtual('timeRemaining').get(function () {
//   let remaining = moment(this.time_max).fromNow(true).split(' ');
//   let min = remaining;
//   return min;
// });

const Tail = mongoose.model('Tail', tailSchema);
module.exports = Tail;
