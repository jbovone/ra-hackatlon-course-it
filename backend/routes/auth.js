const express = require("express");
const router = express.Router();
const validation = require("../validation/auth.js");
const {
  firebaseCreateUser,
  signOutGoogle,
  loginWithGoogle,
} = require("../auth/firebase");

router.post("/signup", async (req, res, next) => {
  const { body } = req;
  const { email, password } = body;
  try {
    const user = await firebaseCreateUser(email, password); //param.user
    console.log(user);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    next();
  }
});

router.post("/signin", async (req, res, next) => {
  const { body } = req;
  const { email, password } = body;
  try {
    await validation.validate(body);
    const user = await loginWithGoogle(email, password);
    console.log(user);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    next();
  }
});
router.get("/logout", async (req, res, next) => {
  try {
    await signOutGoogle();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = router;
