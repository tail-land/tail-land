const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, 'Insert name'] },
  lastName: { type: String, required: [true, 'Insert last name'] },
  email: { type: String, required: [true, 'Insert email'] },
  password: { type: String, required: [true, 'Insert password'] },
  pic_path: String,
  pic_name: String,
  rol: {type: String, enum: ['Ta', 'User'], required: [true, 'Insert rol']}
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;