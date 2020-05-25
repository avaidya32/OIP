const routes = require("express").Router();
const mongoose = require("mongoose");
const passport = require("passport");
const passportSetup = require("../../../utils/passport-setup");
const AlternateUsers = mongoose.model("AlternateUsers");
const opn = require("opn");
const logout = require("express-passport-logout");

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
    if (req.user.Role === "Client") {
      res.redirect("/clientHome");
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
    // if (req.user.Role === "Client") {
    //   res.redirect("/clientHome");
    // }
    // else
    if (req.user.Role === "Startup") {
      res.redirect("/startupHome");
    }
    // res.redirect(
    //   `http://localhost:3000/additionalInfo?GoogleId=${req.user.GoogleId}`
    // );
  }
);

routes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

routes.get("/google/current_user", (req, res) => {
  res.send(req.user);
});
routes.get("/github", passport.authenticate("github", { scope: ["user"] }));

routes.get("/github/redirect", passport.authenticate("github"), (req, res) => {
  console.log("here:", req.user);
  console.log("in callback");
  // res.redirect('/additionalInfo');
  res.redirect(
    `http://localhost:3000/additionalInfo?GithubId=${req.user.GithubId}`
  );
});

module.exports = routes;
