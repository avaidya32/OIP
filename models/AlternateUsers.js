const mongoose = require("mongoose");

const AlternateUsersSchema = new mongoose.Schema({
//   Name: {
//     type: String,
//   },
  Email: {
    type: String,
  },
  GithubId: {
    type: String,
  },
  Name: {
    type: String,
  },
  GoogleId: {
    type: String,
  },
});

mongoose.model("AlternateUsers",AlternateUsersSchema);

