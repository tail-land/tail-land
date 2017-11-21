const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  name: String,
  lastName: String,
  email: String,
  password: String,
  pic_path: String,
  pic_name: String,
  rol: {type: String, enum: ['Ta', 'User']}
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;