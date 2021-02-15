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
  /*para probar si esta*/
  try {
    const { session } = req;
    if (session === undefined) console.error("no session middleware");
    console.log(session); //session.id session.hash ??? no me acuerdo... session!.user = a lo que quieras guardar en la session, on obv normal.
  } catch (error) {
    console.error("no session middleware");
  }

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
  /* 
   req.session.destroy(function(err) {
    // cannot access session here
  })
 */
  return res.sendStatus(200);
});

module.exports = router;
