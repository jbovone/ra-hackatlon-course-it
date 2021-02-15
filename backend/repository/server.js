const mongoose = require("mongoose");

const db = require("./models");

const createUser = function(user) {
  return db.User.create(user).then(docUser => {
    console.log("\n>> Created User:\n", docUser);
    return docUser;
  })
}

const createPet = function(pet) {
  return db.Pet.create(pet).then(docPet => {
    console.log("\n>> Created Pet:\n", docPet);
    return docPet;
  })
}

const run = async function() {
  const user = await createUser({
    username: "Tuvieja",
    email: "entanga@gmail.com",
    password: "algo",
    createdAt: Date.now()
  });
};

mongoose.connect(process.env.DB_PATH || "mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));

run();


// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   // we're connected!
//   console.log("dbconnected");
// });

// getall

// User.find((err, users) => {
//   if (err) return console.error(err, "");
//   console.log(users, "users");
//   return users;
// });

// findOne

// User.find({ name: /^gero/ }, (err, user) => {
//   if (err) return console.error(err, "");
//   console.log(user, "users");
//   return user;
// });
