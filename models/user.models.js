const { Db } = require("mongodb");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e_shop");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    minLength: 3,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("user", userSchema);