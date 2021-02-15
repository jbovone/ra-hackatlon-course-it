const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  pets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet"
  }],
  createdAt: Date,
})

UserSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", UserSchema);

module.exports = User;
