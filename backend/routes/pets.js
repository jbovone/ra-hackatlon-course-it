const express = require("express");
const router = express.Router();
const { getPets } = require("../auth/firebase");

router.get("/pets", async (req, res, next) => {
  console.log("pets");
  try {
    const { snapshots } = await getPets();
    return res.status(200).send(snapshots.docs.map((doc) => doc.data()));
  } catch (error) {
    next();
  }
});

router.post("/create", function (req, res) {
  const { body } = req;
  res.status(200).send("OK");
});

router.post("/delete", function (req, res) {
  const { body } = req;
  res.status(200).send("OK");
});

router.get("/update", function (req, res) {
  const { body } = req;
  res.status(200).send("OK");
});
