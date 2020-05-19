// import dbConnect from "../../utils/dbConnect";
const routes = require("express").Router();
const test = require("./test");
const register = require("./register");
const hackathon = require("./hackathon");

// dbConnect();

// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
routes.use("/hackathon", hackathon);
routes.use("/register", register);
routes.use("/test", test);
routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

module.exports = routes;
