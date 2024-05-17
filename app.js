const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("done");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
