require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.use(express.static(path.join(process.cwd(), "build")));

app.get("/encourage", async (req, res) => {
  res.send("Pero ya team!!");
});

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.listen(process.env.PORT || 3001, () => console.log("listening 3001"));
