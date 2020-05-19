const mongoose = require("mongoose");

const ClientsSchema = new mongoose.Schema({
  OrgName: {
    type: String,
    required: [true, "Please add Organisation Namer"],
    unique: false,
    trim: true,
    maxlength: [100, "Organisation Name can't be more than 100 characters"],
  },
  Name: {
    type: String,
    required: [true, "Please add Name"],
    unique: false,
    trim: true,
    maxlength: [100, "Name can't be more than 100 characters"],
  },
  EmailID: {
    type: String,
    required: [true, "Please add email"],
    unique: true,
    trim: true,
    maxlength: [60, "Email can't be more than 40 characters"],
  },
  PhNumber: {
    type: Number,
    required: [true, "Please add Phone Number"],
    unique: true,
    trim: true,
    maxlength: 10,
  },
  Desc: {
    type: String,
    required: [true, "Please add Description"],
    unique: true,
    trim: true,
    maxlength: 300,
  },
  Sector: {
    type: String,
    required: [true, "Please add Sector"],
    unique: false,
    trim: true,
    maxlength: 30,
  },
  username: {
    type: String,
    required: [true, "Please add Name"],
    unique: true,
    trim: true,
    maxlength: [40, "Username can't be more than 40 characters"],
  },
  password: {
      type: String,
      required: [true,"Please add password"],
      unique: false,
      trim: true,
      maxlength: [40,"Username can't be more than 40 characters"],
  }
});

mongoose.model("Clients", ClientsSchema);
