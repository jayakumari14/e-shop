const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
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
  products: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
  gstin: String,
});

module.exports = mongoose.model("owner", ownerSchema);
