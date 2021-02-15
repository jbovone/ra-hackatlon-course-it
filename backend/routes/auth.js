const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../repository/models");
//const { firebaseAuthCreate } = require("../auth/firebase");

passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

router.post("/signin", (req, res) => {
  const { body } = req;
  console.log("signin", body);
  res.status(200).send({
    name: "geronimo",
  });
  //mongo
});

router.post("/signup", async (req, res, next) => {
  const { body } = req;
  const { email, password } = body;
  console.log("signup");
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
