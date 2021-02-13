require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const loginRouter = require("./routes/auth.js");

console.log(loginRouter);
app.use(cors());

app.use(express.static(path.join(process.cwd(), "build")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use(loginRouter);

app.all("*", (_, res) => {
  res.send("error");
});

app.listen(process.env.PORT || 3002, () => console.log("listening 3001"));
