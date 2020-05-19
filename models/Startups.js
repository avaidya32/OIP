const mongoose = require("mongoose");

const StartupsSchema = new mongoose.Schema({
  OrgName: {
    type: String,
    required: [true, "Please add Organisation Namer"],
    unique: true,
    trim: true,
    maxLength: [100, "Organisation Name can't be more than 100 characters"],
  },
  Name: {
    type: String,
    required: [true, "Please add Name"],
    unique: false,
    trim: true,
    maxLength: [100, "Name can't be more than 100 characters"],
  },
  EmailID: {
    type: String,
    required: [true, "Please add email"],
    unique: true,
    trim: true,
    maxLength: [60, "Email can't be more than 40 characters"],
  },
  PhNumber: {
    type: Number,
    required: [true, "Please add Phone Number"],
    unique: true,
    trim: true,
    maxLength: 10,
  },
  Desc: {
    type: String,
    required: [true, "Please add Description"],
    unique: true,
    trim: true,
    maxLength: 300,
  },
  Sector: {
    type: String,
    required: [true, "Please add Sector"],
    unique: false,
    trim: true,
    maxLength: 30,
  },
  Tech: {
    type: String,
    required: [false],
    unique: false,
    trim: true,
    maxLength: 30,
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

mongoose.model("Startups", StartupsSchema);
