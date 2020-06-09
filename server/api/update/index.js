const routes = require("express").Router();
const mongoose = require("mongoose");
const Clients = mongoose.model("Clients");
const Startups = mongoose.model("Startups");
const VCs = mongoose.model("VCs");
const Universities = mongoose.model("Universities");
const Students = mongoose.model("Students");

// Clients.findById(id, function (err, doc) {
//     doc.OrgName = OrgName;
//     doc.Name = Name;
//     doc.EmailID = Email;
//     doc.PhNumber = Number;
//     doc.Desc = Description;
//     doc.Sector = Sector;
//   })

routes.post("/client", async ({ body }, res) => {
  const { id, OrgName, Name, Email, Number, Description, Sector } = body;
  console.log("body in api:", body);
  console.log("user id in api:", id);
  try {
    var query = { _id: id };
    await Clients.updateOne(query, {
      OrgName: OrgName,
      Name: Name,
      EmailID: Email,
      PhNumber: Number,
      Desc: Description,
      Sector: Sector,
    }).then((data) => {
      console.log("data updated: ", data);
      res.redirect("/clientHome");
    });
  } catch (err) {}
});

routes.post("/startup", async ({ body }, res) => {
  const { id, OrgName, Name, Email, Number, Description, Sector, Tech } = body;
  console.log("body in api:", body);
  console.log("user id in api:", id);
  try {
    var query = { _id: id };
    await Startups.updateOne(query, {
      OrgName: OrgName,
      Name: Name,
      EmailID: Email,
      PhNumber: Number,
      Desc: Description,
      Sector: Sector,
      Tech: Tech,
    }).then((data) => {
      console.log("data updated: ", data);
      res.redirect("/startupHome");
    });
  } catch (err) {}
});

routes.post("/student", async ({ body }, res) => {
  const { id, Name, Email, University, Number, Year, Specialization } = body;
  console.log("body in api:", body);
  console.log("user id in api:", id);
  try {
    var query = { _id: id };
    await Students.updateOne(query, {
      Name: Name,
      EmailID: Email,
      University: University,
      PhNumber: Number,
      Year: Year,
      Specialization: Specialization
    }).then((data) => {
      console.log("data updated: ", data);
      res.status(200).json({data: 'data'});
    });
  } catch (err) {}
});

module.exports = routes;
