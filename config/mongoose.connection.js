const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/e_shop")
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose.connection;
