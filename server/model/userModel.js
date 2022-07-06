const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  Area: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // role: {
  //     type: String,
  //     enum: [roles.admin, roles.user],
  //     default: roles.user,
  //   },
});

module.exports = User = new mongoose.model("User", userSchema);
