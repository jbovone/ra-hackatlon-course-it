const mongoose = require("mongoose");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session); //si hay que ejecutarlo aca no estoy seguro

module.exports = function () {
  return mongoose
    .connect("mongodb://localhost:27017/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("moongose success");
      return new MongoStore({ mongooseConnection: mongoose.connection });
    })
    .catch((err) => console.error("Connection error", err));
};
