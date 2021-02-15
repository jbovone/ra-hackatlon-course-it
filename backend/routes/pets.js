const express = require("express");
const router = express.Router();

router.get("/pets", function (req, res) {
  res.status(200).send("OK");
});
