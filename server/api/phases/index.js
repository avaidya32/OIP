const routes = require("express").Router();
const mongoose = require("mongoose");
const Clients = mongoose.model("Clients");
const Hackathons = mongoose.model("Hackathons");

routes.post("/phase1", async ({ body }, res) => {
  console.log("api body:", body);
  const { id, Phase1 } = body;
  try {
    var query = { _id: id };
    await Hackathons.updateOne(query, {
      Phase1: { Name: Phase1.Name, Desc: Phase1.Desc },
    }).then((data) => {
      console.log("data updated: ", data);
      //res.redirect("/clientHome");
      return res.status(200).json({yay: 1});
    });
  } catch (err) {}
});

routes.post("/phase3", async ({ body }, res) => {
  console.log("api body:", body);
  const { id, Phase1, Phase2, Phase3 } = body;
  try {
    var query = { _id: id };
    await Hackathons.updateOne(query, {
      Phase1: { Name: Phase1.Name, Desc: Phase1.Desc },
      Phase2: { Name: Phase2.Name, Desc: Phase2.Desc },
      Phase3: { Name: Phase3.Name, Desc: Phase3.Desc },
    }).then((data) => {
      console.log("data updated: ", data);
      //res.redirect("/clientHome");
      return res.status(200).json({yay: 1});
    });
  } catch (err) {}
});

routes.post("/phase4", async ({ body }, res) => {
  console.log("api body:", body);
  const { id, Phase1, Phase2, Phase3, Phase4 } = body;
  try {
    var query = { _id: id };
    await Hackathons.updateOne(query, {
      Phase1: { Name: Phase1.Name, Desc: Phase1.Desc },
      Phase2: { Name: Phase2.Name, Desc: Phase2.Desc },
      Phase3: { Name: Phase3.Name, Desc: Phase3.Desc },
      Phase4: { Name: Phase4.Name, Desc: Phase4.Desc },
    }).then((data) => {
      console.log("data updated: ", data);
      //res.redirect("/clientHome");
      return res.status(200).json({yay: 1});
    });
  } catch (err) {}
});

routes.post("/phase5", async ({ body }, res) => {
  console.log("api body:", body);
  const { id, Phase1, Phase2, Phase3, Phase4, Phase5 } = body;
  try {
    var query = { _id: id };
    await Hackathons.updateOne(query, {
      Phase1: { Name: Phase1.Name, Desc: Phase1.Desc },
      Phase2: { Name: Phase2.Name, Desc: Phase2.Desc },
      Phase3: { Name: Phase3.Name, Desc: Phase3.Desc },
      Phase4: { Name: Phase4.Name, Desc: Phase4.Desc },
      Phase5: { Name: Phase5.Name, Desc: Phase5.Desc },
    }).then((data) => {
      console.log("data updated: ", data);
      return res.status(200).json({yay: 1});
      //res.redirect("/clientHome");
    });
  } catch (err) {}
});

routes.post("/phase6", async ({ body }, res) => {
  console.log("api body:", body);
  const { id, Phase1, Phase2, Phase3, Phase4, Phase5, Phase6 } = body;
  try {
    var query = { _id: id };
    await Hackathons.updateOne(query, {
      Phase1: { Name: Phase1.Name, Desc: Phase1.Desc },
      Phase2: { Name: Phase2.Name, Desc: Phase2.Desc },
      Phase3: { Name: Phase3.Name, Desc: Phase3.Desc },
      Phase4: { Name: Phase4.Name, Desc: Phase4.Desc },
      Phase5: { Name: Phase5.Name, Desc: Phase5.Desc },
      Phase6: { Name: Phase6.Name, Desc: Phase6.Desc },
    }).then((data) => {
      console.log("data updated: ", data);
      return res.status(200).json({yay: 1});
      //res.redirect("/clientHome");
    });
  } catch (err) {}
});

module.exports = routes;
