// import dbConnect from "../../utils/dbConnect";
const routes = require("express").Router();
const test = require("./test");
const register = require("./register");
const hackathon = require("./hackathon");
const upload = require('./upload');
const startup = require('./startup');
const auth = require('./auth');
const update = require("./update");
const dashboard = require("./dashboard");

// dbConnect();

// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
routes.use("/update", update)
routes.use("/hackathon", hackathon);
routes.use("/register", register);
routes.use("/startup", startup);
routes.use("/test", test);
routes.use("/upload", upload);
routes.use("/auth", auth);
routes.use ("/dashboard",dashboard);
routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

module.exports = routes;
