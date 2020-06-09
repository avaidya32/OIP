const mongoose = require("mongoose");

const SolutionsSchema = new mongoose.Schema({
  HackathonId:{
      type:String,
  },
  StartupId:{
      type:String,
  },
  StartupName:{
    type:String,
  },
  Link: {
    type: String,
  },
});

mongoose.model("Solutions", SolutionsSchema);
