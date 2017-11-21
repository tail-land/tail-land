const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
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