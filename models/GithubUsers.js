const mongoose = require("mongoose");

const GithubUsersSchema = new mongoose.Schema({
//   Name: {
//     type: String,
//   },
  Email: {
    type: String,
  },
  GithubId: {
    type: String,
  },
});

mongoose.model("GithubUsers",GithubUsersSchema);

