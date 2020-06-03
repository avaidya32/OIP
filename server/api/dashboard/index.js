const routes = require("express").Router();
const mongoose = require("mongoose");
const Clients = mongoose.model("Clients");
const Hackathons = mongoose.model("Hackathons");

routes.post("/client", async ({body}, res) => {
  console.log('api:',body);
  const {id} = body;
  var query = Hackathons.find({ "ClientId" : id });
  query.exec(function (err, hackathons) {
    if (err) {
      return res.status(500).json({ error: "error while retrieving data" });
    }
    console.log("in api", hackathons);
    return res.status(200).json(hackathons);
  });
});

module.exports = routes;
