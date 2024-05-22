const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.models");

router.get("/", (req, res) => {
  res.send("owners route page");
});

console.log(process.env.NODE_ENV);

// if(process.env==="development"){

// }

router.post("/create", (req, res) => {
  res.send("owners route page");
});

module.exports = router;
