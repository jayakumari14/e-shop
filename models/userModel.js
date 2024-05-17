const { Db } = require("mongodb");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e_shop");

mongoose.Schema({
  fullName: String,
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
