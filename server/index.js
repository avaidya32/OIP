const express = require("express")();
const next = require("next");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const session = require("express-session");
const cookieSession = require("cookie-session");
const passport = require("passport");
const expressValidator = require("express-validator");

require("../models/Clients");
require("../models/Hackathons");
require("../models/Startups");
require("../models/Students");
require("../models/Universities");
require("../models/VCs");
require("../models/GoogleUsers");
require("../models/GithubUsers");
require("../models/AlternateUsers");

// require("../models/Solutions");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");

const api = require("./api");
const mongoose = require("mongoose");
const keys = require("../config/keys");

app.prepare().then(() => {
  mongoose
    .connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "MockApp",
    })
    .then(() => {
      console.log("Connection to mongo established");
    })
    .catch((e) => {
      console.log("Connection to mongo failed: ", e);
    });

  express.use(bodyParser.json());
  express.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  // express.use(expressValidator());
  // express.use(
  //   session({
  //     secret: "kpmg cat left right",
  //     resave: false,
  //     saveUninitialized: false,
  //   })
  // );
  // express.set('trust proxy', 1)

  express.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys:[keys.cookieKey],
    resave: false
  }));

  express.use(passport.initialize());
  express.use(passport.session());

  express.use("/api", api);
  express.all("*", (req, res) => handle(req, res));
  // express.set("trust proxy", 1); // trust first proxy
  // express.use(
  //   session({
  //     secret: "keyboard cat",
  //     resave: false,
  //     saveUninitialized: true,
  //     cookie: { secure: true },
  //   })
  // );

  express.listen(port, (err) => {
    if (err) throw err;
    console.log(`> App served on http://localhost:${port}`);
  });
});
