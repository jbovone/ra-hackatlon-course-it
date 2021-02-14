require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const authRouter = require("./routes/auth.js");

app.use(cors());

app.use(express.static(path.join(process.cwd(), "build")));

app.get("/", (req, res) => {
  console.log("home");
  return res.sendFile("index.html");
});

app.use(express.json());
app.use(authRouter);

app.listen(process.env.PORT || 3001, () => console.log("listening 3001"));
