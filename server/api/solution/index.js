const routes = require("express").Router();
const mongoose = require("mongoose");
const Clients = mongoose.model("Clients");
const Hackathons = mongoose.model("Hackathons");
const Solutions = mongoose.model("Solutions");

routes.post("/getinfo", async ({ body }, res) => {
  try {
    const { id } = body;
    var query = Solutions.find({HackathonId: id});
    query.exec(function (err, solutions) {
      if (err) {
        return res.status(500).json({ error: "error while retrieving data" });
      }
      console.log('in api',solutions)
      return res.status(200).json( solutions );
    });
  } catch {
    res.status(500).json({ error: "error while retrieving datas" });
  }
});

routes.post("/getinfobyid", async ({ body }, res) => {
  try {
    const { id } = body;
    var query = Solutions.findById(id);
    query.exec(function (err, solutions) {
      if (err) {
        return res.status(500).json({ error: "error while retrieving data" });
      }
      console.log('in api',solutions)
      return res.status(200).json( solutions );
    });
  } catch {
    res.status(500).json({ error: "error while retrieving datas" });
  }
});

routes.post("/putinfo", async ({ body }, res) => {
  const { HackathonId, StartupId, StartupName, Link } = body;
  try {
    new Solutions({
      Link: Link,
      HackathonId: HackathonId,
      StartupId: StartupId,
      StartupName: StartupName,
    })
      .save()
      .then((data) => {
        const { _id } = data;
        return res.status(200).json({
          id: data._id,
        });
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

module.exports = routes;
