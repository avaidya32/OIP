const mongoose = require("mongoose");

const VCsSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Please add Name"],
    unique: false,
    trim: true,
    maxLength: [100, "Name can't be more than 100 characters"],
  },
  OrgName: {
    type: String,
    required: [true, "Please add University name"],
    unique: false,
    trim: true,
    maxLength: [100, "UniversityName can't be more than 100 characters"],
  },
  PhNumber: {
    type: Number,
    required: [true, "Please add Phone Number"],
    unique: true,
    trim: true,
    maxLength: 10,
  },
  EmailID: {
    type: String,
    required: [true, "Please add email"],
    unique: true,
    trim: true,
    maxLength: [60, "Email can't be more than 40 characters"],
  },
  username: {
    type: String,
    required: [true, "Please add Name"],
    unique: true,
    trim: true,
    maxLength: [40, "Username can't be more than 40 characters"],
  },
  password: {
    type: String,
    required: [true, "Please add Password"],
    unique: true,
    trim: true,
    maxLength: [40, "Password can't be more than 40 characters"],
  },
});

mongoose.model("VCs", VCsSchema);