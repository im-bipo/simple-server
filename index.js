const express = require("express");
const app = express();
console.log("Hello form server");
app.get("/", (req, res) => {
  console.log("Hello buddy");
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});