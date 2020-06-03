const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const GithubStrategy = require("passport-github2");
const LocalStrategy = require("passport-local").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
require("../models/Clients");
const Clients = mongoose.model("Clients");
require("../models/Startups");
const Startups = mongoose.model("Startups");

passport.serializeUser((user, done) => {
  var key = {
    id: user.id,
    type: user.Role,
  };
  done(null, key);
});

passport.deserializeUser((key, done) => {
  // GoogleUsers.findById(id).then((user) => {
  //   done(null, user.id);
  // });
  var Model = key.type === "Client" ? Clients : Startups;
  Model.findById(key.id).then((user) => {
    done(null, user);
  });
  //done(null,user.id);
});

passport.use(
  "google-client",
  new GoogleStrategy(
    {
      //options for strategy
      callbackURL: "/api/auth/google/redirect",
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      console.log("passport cb fired");
      //check if user exists
      Clients.findOne({ GoogleID: profile.id }).then((currentUser) => {
        if (currentUser) {
          //user exists
          console.log("user is", currentUser);
          done(null, currentUser);
        } else {
          //create new user
          new Clients({
            Name: profile.displayName,
            GoogleID: profile.id,
            Role: "Client",
          })
            .save()
            .then((newUser) => {
              console.log("new user created", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.use(
  "client-local",
  new LocalStrategy(function (username, password, done) {
    Clients.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

passport.use(
  "startup-local",
  new LocalStrategy(function (username, password, done) {
    Startups.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

passport.use(
  "google-startup",
  new GoogleStrategy(
    {
      //options for strategy
      callbackURL: "/api/auth/google/redirect-startup",
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      console.log("passport cb fired");
      //check if user exists
      Startups.findOne({ GoogleID: profile.id }).then((currentUser) => {
        if (currentUser) {
          //user exists
          console.log("user is", currentUser);
          done(null, currentUser);
        } else {
          //create new user
          new Startups({
            Name: profile.displayName,
            GoogleID: profile.id,
            Role: "Startup",
          })
            .save()
            .then((newUser) => {
              console.log("new user created", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.use(
  "github-client",
  new GithubStrategy(
    {
      clientID: keys.GITHUB_CLIENT_ID,
      clientSecret: keys.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/github/redirect",
    },
    function (accessToken, refreshToken, profile, done) {
      Clients.findOne({ GithubID: profile.id }).then((currentUser) => {
        if (currentUser) {
          //user exists
          console.log("user is", currentUser);
          done(null, currentUser);
        } else {
          //create new user
          new Clients({
            EmailID: profile.email,
            GithubID: profile.id,
            Role:"Client"
          })
            .save()
            .then((newUser) => {
              console.log("new user created", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.use(
  "github-startup",
  new GithubStrategy(
    {
      clientID: keys.GITHUB_CLIENT_ID,
      clientSecret: keys.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/github/redirect/startup",
    },
    function (accessToken, refreshToken, profile, done) {
      Startups.findOne({ GithubID: profile.id }).then((currentUser) => {
        if (currentUser) {
          //user exists
          console.log("user is", currentUser);
          done(null, currentUser);
        } else {
          //create new user
          new Startups({
            EmailID: profile.email,
            GithubID: profile.id,
            Role:"Startup"
          })
            .save()
            .then((newUser) => {
              console.log("new user created", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
