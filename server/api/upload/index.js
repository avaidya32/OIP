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
let gfs1;
const conn = mongoose.createConnection(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
    console.log("in storage:", req.query.id);
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          console.log("in storage:", err);
          return reject(err);
        }
        const filename = "file_" + req.query.id;
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
  console.log(req.query.id);
  res.redirect(`/probpage?id=${req.query.id}`);
});

routes.get("/image", (req, res) => {
  console.log("name", req.query.name);
  const fname = req.query.name;
  gfs.files.findOne({ filename: fname }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ err: "No file exists" });
    }
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  });
});
//////////////////////////////////////////////////////////////////////////
// const conn1 = mongoose.createConnection(keys.mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

conn.once("open", () => {
  //Init stream
  gfs1 = Grid(conn.db, mongoose.mongo);
  gfs1.collection("solutions");
});

//create storage engine
var storage1 = new GridFsStorage({
  url: keys.mongoURI,
  file: (req, file) => {
    console.log("in storage1:");
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          console.log("in storage1:", err);
          return reject(err);
        }
        const filename = buf.toString("hex");
        const fileInfo = {
          filename: filename,
          bucketName: "solutions",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload1 = multer({ storage1 });

routes.post("/solution", upload1.single("file"), (req, res) => {
  console.log("body:", req.body);
  return res.json(500);
  //res.redirect(`/seesolution?name=${file.filename}`);
});

module.exports = routes;
