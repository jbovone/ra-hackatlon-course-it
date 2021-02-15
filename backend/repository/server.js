const mongoose = require("mongoose");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session); //si hay que ejecutarlo aca no estoy seguro

module.exports = function () {
  return mongoose
    .connect(process.env.DB_PATH || "mongodb://localhost/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("moongose success");
      return new MongoStore({ mongooseConnection: mongoose.connection });
    })
    .catch((err) => console.error("Connection error", err));
};

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   // we're connected!
//   console.log("dbconnected");
// });
