const mongoose = require("mongoose");

const GoogleUsersSchema = new mongoose.Schema({
//   Name: {
//     type: String,
//   },
  username: {
    type: String,
  },
  GoogleId: {
    type: String,
  },
});

mongoose.model("GoogleUsers",GoogleUsersSchema);

