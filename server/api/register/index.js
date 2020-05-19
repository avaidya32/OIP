const routes = require("express").Router();
const mongoose = require("mongoose");
const Clients = mongoose.model("Clients");
const Startups = mongoose.model("Startups");
const VCs = mongoose.model("VCs");
const Universities = mongoose.model("Universities");
const Students = mongoose.model("Students");

routes.post("/vc", async ({ body }, res) => {
  const { Name, Number, Email, OrgName, Username, Password } = body;
  try {
    new VCs({
      OrgName: OrgName,
      Name: Name,
      EmailID: Email,
      PhNumber: Number,
      username: Username,
      password: password,
    })
      .save()
      .then((data) => {
        console.log("Added to db:", data);
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
    return res.status(200).json({ success: true, data: client1 });
  } catch (error) {
    return res.status(400);
  }
});

routes.post("/client", async ({ body }, res) => {
  const {
    OrgName,
    Name,
    Email,
    Number,
    Description,
    Sector,
    Username,
    Password,
  } = body;
  try {
    new Clients({
      OrgName: OrgName,
      Name: Name,
      EmailID: Email,
      PhNumber: Number,
      Desc: Description,
      Sector: Sector,
      username: Username,
      password: Password,
    })
      .save()
      .then((data) => {
        const {_id} = data;
        return res.status(200).json({ id: _id });
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

routes.post("/startup", async ({ body }, res) => {
  const {
    OrgName,
    Name,
    Email,
    Number,
    Description,
    Sector,
    Username,
    Tech,
    Password,
  } = body;
  try {
    new Startups({
      OrgName: OrgName,
      Name: Name,
      EmailID: Email,
      PhNumber: Number,
      Desc: Description,
      Sector: Sector,
      Tech: Tech,
      username: Username,
      password: Password,
    })
      .save()
      .then((data) => {
        //TODO: get relevant field from data
        return res.status(200).json({ success: true });
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
    
  } catch (error) {
    return res.status(400);
  }
});

routes.post("/student", async ({ body }, res) => {
  const {
    Name,
    Email,
    University,
    Number,
    Year,
    Specialization,
    Username,
    Password,
  } = body;
  try {
    new Students({
      Name: Name,
      EmailID: Email,
      PhNumber: Number,
      University: University,
      Year: Year,
      Specialization: Specialization,
      username: Username,
      password: password,
    })
      .save()
      .then((data) => {
        return res.status(200).json({ success: true, data: client1 });
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

routes.post("/university", async ({ body }, res) => {
  const {
    Name: Name,
    Email: Email,
    Number: Number,
    University: University,
    Username: Username,
    Password: Password,
  } = body;
  try {
    new Universities({
      Name: Name,
      EmailID: Email,
      PhNumber: Number,
      University: University,
      username: Username,
      password: password,
    })
      .save()
      .then((data) => {
        return res.status(200).json({ success: true, data: client1 });
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

module.exports = routes;
