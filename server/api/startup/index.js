const routes = require("express").Router();
const mongoose = require("mongoose");
const Startups = mongoose.model("Startups");

routes.get("/getinfo", async (req, res) => {
  try {
    var query = Startups.find();
    query.sort({ OrgName: 1 });
    query.exec(function (err, startups) {
      console.log("data retrieved:", startups);
      if (err) {
        return res.status(500).json({ error: "error while retrieving data" });
      }
      return res.status(200).json({ data: startups });
    });
  } catch {
    res.status(500).json({ error: "error while retrieving datas" });
  }
});

routes.post("/getinfo", async ({ body }, res) => {
  try {
    const { id } = body;
    var query = Startups.findById(id);
    query.exec(function (err, startups) {
      if (err) {
        return res.status(500).json({ error: "error while retrieving data" });
      }
      return res.status(200).json(startups);
    });
  } catch {
    res.status(500).json({ error: "error while retrieving datas" });
  }
});

module.exports = routes;
