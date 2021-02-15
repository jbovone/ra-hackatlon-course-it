require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const passport = require("passport");
const authRouter = require("./routes/auth.js");

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(process.cwd(), "build")));

app.get("/", (req, res) => {
  console.log("home");
  return res.sendFile("index.html");
});

app.use(express.json());
app.use(authRouter);

app.use(function (err, req, res, next) {
  console.log(err, "estamos en error controlado, joya!!");
  return res.sendStatus(500);
});

app.listen(process.env.PORT || 3001, () => console.log("listening 3001"));
