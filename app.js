const express = require("express");
const path = require("path");

const app = express();
console.log(__dirname)
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/Pages/aboutus.html"));
});

app.get("/challenges", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/Pages/challengesPage.html"));
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});