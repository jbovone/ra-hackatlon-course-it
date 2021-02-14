const mongoose = require("mongoose");

const User = new mongoose.model(
  "User",
  new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // pets: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Pet"
  // }],
  })
);

module.exports = User;
