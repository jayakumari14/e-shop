const mongoose = require("mongoose");
const config = require("config");
mongoose
  .connect(`${config.get("DATABASR_URI")}/e-shop`)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose.connection;
