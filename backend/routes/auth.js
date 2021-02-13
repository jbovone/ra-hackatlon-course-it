const express = require("express");
const router = express.Router();
const { firebaseAuthCreate } = require("../auth/firebase");

router.get("/signin", (req, res) => {
  const { params } = req;
  //
  res.send({
    name: "geronimo",
  });
  //mongo
});

router.post("/signup", async (req, res, next) => {
  const { params } = req;
  const { email, password } = params;
  try {
    //const actualuser = yup.validate())= validation yup
    //const user = await firebaseAuthCreate(email, password); //devulve un token
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
