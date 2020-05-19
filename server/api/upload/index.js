const routes = require("express").Router();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const path = require("path");
const crypto = require("crypto");
// const methodOverride = require("method-override");
const keys = require("../../../config/keys");

let gfs;
const conn = mongoose.createConnection(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "MockApp",
});

conn.once("open", () => {
  //Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

//create storage engine
var storage = new GridFsStorage({
  url: keys.mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

routes.post("/", upload.single("file"), (req, res) => {
  res.redirect('/api/hackathon');
});

module.exports = routes;