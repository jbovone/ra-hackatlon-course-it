const express = require("express");
const router = express.Router();
const passport = require("../passport/setup");
// const validation = require("../validation/auth.js"); 
//const { firebaseAuthCreate } = require("../auth/firebase");

router.post("/signup", (req, res, next) => {
  console.log(req.body, req.session);
  passport.authenticate("local", function(err, user, info) {
      if (err) {
          return res.status(400).json({ errors: err });
      }
      if (!user) {
          return res.status(400).json({ errors: "No user found" });
      }
      req.logIn(user, function(err) {
          if (err) {
              return res.status(400).json({ errors: err });
          }
          return res.status(200).json({ success: `logged in ${user.id}` });
      });
  })(req, res, next);
});

router.post("/signin", (req, res, next) => {
  console.log(req.body, req.session);
  passport.authenticate("local", function(err, user, info) {
      if (err) {
          return next;
      }
      if (!user) {
          return next;
      }
      req.logIn(user, function(err) {
          if (err) {
              return next;
          }
          return res.status(200).json({ success: `logged in ${user.id}` });
      });
  })(req, res, next);
});

// router.post("/signup", async (req, res, next) => {
//   const { body } = req;
//   /*para probar si esta*/
//   try {
//     const { session } = req;
//     if (session === undefined) console.error("no session middleware");
//     console.log(session, body); //session.id session.hash ??? no me acuerdo... session!.user = a lo que quieras guardar en la session, on obv normal.
//   } catch (error) {
//     console.error("no session middleware");
//   }
// });

// router.post("/signin", async (req, res, next) => {
//   const { body } = req;
//   try {
//     console.log("signin")
//     await validation.validate(body);
//     return res.sendStatus(200);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/logout", function (req, res) {
//   /* 
//    req.session.destroy(function(err) {
//     // cannot access session here
//   })
//  */
//   return res.sendStatus(200);
// });

module.exports = router;
