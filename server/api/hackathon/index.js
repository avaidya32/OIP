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
    const { id } = body;
    var query = Hackathons.findById(id);
    query.exec(function (err, hackathons) {
      if (err) {
        return res.status(500).json({ error: "error while retrieving data" });
      }
      console.log('in api',hackathons)
      return res.status(200).json( hackathons );
    });
  } catch {
    res.status(500).json({ error: "error while retrieving datas" });
  }
});

routes.post("/putinfo", async ({ body }, res) => {
  const {
    ClientId,
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
      ClientId: ClientId,
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
        const {_id} = data;
        return res.status(200).json({
          id: data._id,
        })
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});


//////////////////////////////////////////////////////////////////


routes.post("/putinfo/offline", async ({ body }, res) => {
  const {
    ClientId,
    OrgName,
    ProblemName,
    Date,
    Venue,
    Duration,
    Reward,
    Link,
    Type
  } = body;
  try {
    new Hackathons({
      ClientId: ClientId,
      OrgName: OrgName,
      ProblemName: ProblemName,
      Date: Date,
      Venue: Venue,
      Duration: Duration,
      Reward: Reward,
      Link: Link,
      Type: Type,
    })
      .save()
      .then((data) => {
        const {_id} = data;
        return res.status(200).json({
          id: data._id,
        })
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

routes.post("/putinfo/application", async ({ body }, res) => {
  const {
    ClientId,
    OrgName,
    ProblemName,
    Mode,  
    Date,
    Duration,
    Statement,
    Reward,
    Link,
    Type,
    Application
  } = body;
  try {
    new Hackathons({
      ClientId: ClientId,
      OrgName: OrgName,
      ProblemName: ProblemName,
      Mode: Mode,
      Date: Date,
      Duration: Duration,
      Statement: Statement,
      Reward: Reward,
      Link: Link,
      Type: Type,
      Application: Application,
    })
      .save()
      .then((data) => {
        const {_id} = data;
        return res.status(200).json({
          id: data._id,
        })
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

routes.post("/putinfo/language", async ({ body }, res) => {
  const {
    ClientId,
    OrgName,
    ProblemName,
    Mode,  
    Date,
    Duration,
    Statement,
    Reward,
    Link,
    Type,
    ProgLanguage
  } = body;
  try {
    new Hackathons({
      ClientId: ClientId,
      OrgName: OrgName,
      ProblemName: ProblemName,
      Mode: Mode,
      Date: Date,
      Duration: Duration,
      Statement: Statement,
      Reward: Reward,
      Link: Link,
      Type: Type,
      ProgLanguage: ProgLanguage,
    })
      .save()
      .then((data) => {
        const {_id} = data;
        return res.status(200).json({
          id: data._id,
        })
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

routes.post("/putinfo/codesprint", async ({ body }, res) => {
  const {
    ClientId,
    OrgName,
    ProblemName,
    Mode,  
    Date,
    Duration,
    Statement,
    Reward,
    Link,
    Type,
  } = body;
  try {
    new Hackathons({
      ClientId: ClientId,
      OrgName: OrgName,
      ProblemName: ProblemName,
      Mode: Mode,
      Date: Date,
      Duration: Duration,
      Statement: Statement,
      Reward: Reward,
      Link: Link,
      Type: Type,
    })
      .save()
      .then((data) => {
        const {_id} = data;
        return res.status(200).json({
          id: data._id,
        })
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

routes.post("/putinfo/group", async ({ body }, res) => {
  const {
    ClientId,
    OrgName,
    ProblemName,
    Mode,  
    Date,
    Duration,
    Statement,
    Reward,
    Link,
    Type,
    TargetGroup,
  } = body;
  try {
    new Hackathons({
      ClientId: ClientId,
      OrgName: OrgName,
      ProblemName: ProblemName,
      Mode: Mode,
      Date: Date,
      Duration: Duration,
      Statement: Statement,
      Reward: Reward,
      Link: Link,
      Type: Type,
      TargetGroup: TargetGroup
    })
      .save()
      .then((data) => {
        const {_id} = data;
        return res.status(200).json({
          id: data._id,
        })
      })
      .catch((e) => {
        console.log("Could not add data:", e);
      });
  } catch (error) {
    return res.status(400);
  }
});

routes.post("/putinfo/social", async ({ body }, res) => {
  const {
    ClientId,
    OrgName,
    ProblemName,
    Mode,  
    Date,
    Duration,
    Statement,
    Reward,
    Link,
    Type,
    Cause
  } = body;
  try {
    new Hackathons({
      ClientId: ClientId,
      OrgName: OrgName,
      ProblemName: ProblemName,
      Mode: Mode,
      Date: Date,
      Duration: Duration,
      Statement: Statement,
      Reward: Reward,
      Link: Link,
      Type: Type,
      Cause: Cause
    })
      .save()
      .then((data) => {
        const {_id} = data;
        return res.status(200).json({
          id: data._id,
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
