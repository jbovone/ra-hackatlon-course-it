const mongoose = require("mongoose");

const Pet = mongoose.model(
  "Pet",
  new mongoose.Schema({
    name: String,
    description: String,
    images: [],
    createdAt: Date
  })
);

module.exports = Pet;