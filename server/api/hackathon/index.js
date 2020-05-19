const routes = require("express").Router();
const mongoose = require("mongoose");
const Hackathons = mongoose.model("Hackathons");

routes.get("/getinfo", async (req, res) => {
  try {
    var query = Hackathons.find();
    query.sort({ date: -1 });
    query.exec(function (err, hackathons) {
      console.log("data retrieved:", hackathons);
      if (err) {
        return res.status(500).json({ error: "error while retrieving data" });
      }
      return res.status(200).json({ data: hackathons });
    });
  } catch {
    res.status(500).json({ error: "error while retrieving datas" });
  }
});

routes.post("/getinfo", async ({ body }, res) => {
  try {
    const { name } = body;
    var query = Hackathons.findOne({'ProblemName':name});
    query.exec(function (err, hackathons) {
      if (err) {
        return res.status(500).json({ error: "error while retrieving data" });
      }
      return res.status(200).json( hackathons );
    });
  } catch {
    res.status(500).json({ error: "error while retrieving datas" });
  }
});

routes.post("/putinfo", async ({ body }, res) => {
  const {
    OrgName,
    ProblemName,
    Mode,
    Date,
    Venue,
    Duration,
    Statement,
    Reward,
    Link,
  } = body;
  try {
    new Hackathons({
      OrgName: OrgName,
      ProblemName: ProblemName,
      Mode: Mode,
      Date: Date,
      Venue: Venue,
      Duration: Duration,
      Statement: Statement,
      Reward: Reward,
      Link: Link,
    })
      .save()
      .then((data) => {
        const {ProblemName} = data;
        return res.status(200).json({
          name: ProblemName
        })
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

module.exports = routes;
