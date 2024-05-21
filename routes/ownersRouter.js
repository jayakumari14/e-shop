const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("owners route page");
});

module.exports = router;
