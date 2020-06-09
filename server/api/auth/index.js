const routes = require("express").Router();
const mongoose = require("mongoose");
const passport = require("passport");
const passportSetup = require("../../../utils/passport-setup");



routes.get(
  "/client-local",
  passport.authenticate("client-local", {
    successRedirect: "/clientHome",
    failureRedirect: "/",
  })
);

routes.get(
  "/startup-local",
  passport.authenticate("startup-local", {
    successRedirect: "/startupHome",
    failureRedirect: "/",
  })
);

routes.get(
  "/google-client",
  passport.authenticate("google-client", {
    scope: ["profile"],
  })
);

routes.get(
  "/google-startup",
  passport.authenticate("google-startup", {
    scope: ["profile"],
  })
);

routes.get(
  "/google/redirect",
  passport.authenticate("google-client"),
  (req, res) => {
    //res.send('here:'+req.user);
    console.log("in callback");
    // res.redirect('/additionalInfo');
    req.session.user = req.user;
    if (req.user.Role === "Client" && req.user.Desc) {
      res.redirect("/clientHome");
    } else {
      res.redirect("/additionalInfo");
    }
    // else if(req.user.Role === "Startup"){
    //   res.redirect('/startupHome');
    // }
    // res.redirect(
    //   `http://localhost:3000/additionalInfo?GoogleId=${req.user.GoogleId}`
    // );
  }
);

routes.get(
  "/google/redirect-startup",
  passport.authenticate("google-startup"),
  (req, res) => {
    //res.send('here:'+req.user);
    console.log("in callback");
    // res.redirect('/additionalInfo');
    req.session.user = req.user;
    if (req.user.Role === "Startup" && req.user.Desc) {
      res.redirect("/startupHome");
    } else {
      res.redirect("/additionalInfo");
    }
  }
);

/////////////////////////////////////////////////////////////

routes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

routes.get("/google/current_user", (req, res) => {
  res.send(req.user);
});

////////////////////////////////////////////////////////////

routes.get(
  "/github-client",
  passport.authenticate("github-client", { scope: ["user"] })
);

routes.get(
  "/github/redirect",
  passport.authenticate("github-client"),
  (req, res) => {
    console.log("here:", req.user);
    console.log("in callback");

    res.redirect("/clientHome");
  }
);

routes.get(
  "/github-startup",
  passport.authenticate("github-startup", { scope: ["user"] })
);

routes.get(
  "/github/redirect/startup",
  passport.authenticate("github-startup"),
  (req, res) => {
    console.log("here:", req.user);
    console.log("in callback");

    res.redirect("/startupHome");
  }
);
/////////////////////////////////////////////////////////////                     Student 
routes.get(
  "/github-student",
  passport.authenticate("github-student", { scope: ["user"] })
);

routes.get(
  "/github/redirect/student",
  passport.authenticate("github-student"),
  (req, res) => {
    console.log("here:", req.user);
    console.log("in callback");

    if (req.user.Role === "Student" && req.user.Year) {
      res.redirect("/studentHome");
    } else {
      res.redirect("/additionalInfo");
    }
  }
);


routes.get(
  "/google-student",
  passport.authenticate("google-student", {
    scope: ["profile"],
  })
);

routes.get(
  "/google/redirect-student",
  passport.authenticate("google-student"),
  (req, res) => {
    //res.send('here:'+req.user);
    console.log("in callback", req.user);
    // res.redirect('/additionalInfo');
    req.session.user = req.user;
    if (req.user.Role === "Student" && req.user.Year) {
      res.redirect("/studentHome");
    } else {
      res.redirect("/additionalInfo");
    }
  }
);


routes.get(
  "/student-local",
  passport.authenticate("student-local", {
    successRedirect: "/studentHome",
    failureRedirect: "/",
  })
);

module.exports = routes;
