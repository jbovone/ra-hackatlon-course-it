const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../repository/models");

const User = db.User;

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  })
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email })
      .then(user => {
        if(!user) {
          const newUser = new User({ email, password });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.createdAt = Date.now();
              newUser
                .save()
                .then(user => {
                  return done(null, user);
                })
                .catch(err => {
                  return done(null, false, { message: err });
                });
            })
          })
        } else {
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Wrong Passowrd" });
            }
          })
        }
      })
      .catch(err => {
        return done(null, false, { message: err });
      });
  })
);

module.exports = passport;