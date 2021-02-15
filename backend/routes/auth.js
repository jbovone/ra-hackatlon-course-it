const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require("..repository/models/User")
//const { firebaseAuthCreate } = require("../auth/firebase");

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post("/signin", (req, res) => {
  const { body } = req;
  res.status(200).send({
    name: "geronimo",
  });
  //mongo
});

router.post("/signup", async (req, res, next) => {
  const { body } = req;
  const { email, password } = body;
  try {
    //const actualuser = yup.validate())= validation yup
    //const user = await firebaseAuthCreate(email, password); //devulve un token
    //firebaseAuthCreate();
    res.status(200).send({
      name: "geronimo",
    });
  } catch (error) {
    next();
  }
});

router.get("/logout", function (req, res) {
  res.status(200).send("OK");
});

module.exports = router;
