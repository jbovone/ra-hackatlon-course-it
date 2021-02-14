const mongoose = require("mongoose");

mongoose.connect(process.env.DB_PATH || "mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("dbconnected");
});

const typeUser = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

const User = mongoose.model("user", typeUser);

//para el controlador:
const user = new User({ name: "Gero", email: 'Tuviejaentanga@hotmail.com' });
console.log(user.name); // 'Silence'

user.save((err, fluffy) => {
  if (err) return console.error(err);
  fluffy.speak();
});

// getall

User.find((err, users) => {
  if (err) return console.error(err, "");
  console.log(users, "users");
  return users;
});

// findOne

User.find({ name: /^gero/ }, (err, user) => {
  if (err) return console.error(err, "");
  console.log(user, "users");
  return user;
});
