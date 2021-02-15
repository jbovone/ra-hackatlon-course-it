const express = require("express");
const router = express.Router();

router.get("/getall", function (req, res) {
  const { body } = req;
  res.status(200).send("OK");
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
