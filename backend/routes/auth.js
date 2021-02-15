const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../repository/models");
const validation = require("../validation/auth.js");
//const { firebaseAuthCreate } = require("../auth/firebase");

passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

router.post("/signup", async (req, res, next) => {
  const { body } = req;
  try {
    await validation.validate(body);
    //esto debería ser todo lo que hay que hacer en validacion si no pasa explota con error
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.post("/signin", async (req, res, next) => {
  const { body } = req;
  try {
    await validation.validate(body);
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.get("/logout", function (req, res) {
  return res.sendStatus(200);
});

module.exports = router;
