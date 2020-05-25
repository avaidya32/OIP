const mongoose = require("mongoose");

const ClientsSchema = new mongoose.Schema({
  OrgName: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [100, "Organisation Name can't be more than 100 characters"],
  },
  Name: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [100, "Name can't be more than 100 characters"],
  },
  GoogleID: {
    type: String,
    requires: false,
    trim: true,
  },
  GithubID: {
    type: String,
    requires: false,
    trim: true,
  },
  EmailID: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    maxlength: [60, "Email can't be more than 40 characters"],
  },
  PhNumber: {
    type: Number,
    required: false,
    unique: true,
    trim: true,
    maxlength: 10,
  },
  Desc: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    maxlength: 300,
  },
  Sector: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: 30,
  },
  username: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    maxlength: [40, "Username can't be more than 40 characters"],
  },
  password: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [40, "Username can't be more than 40 characters"],
  },
  Role: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
});

ClientsSchema.methods.validPassword = function( pwd ) {
  return ( this.password === pwd );
};
mongoose.model("Clients", ClientsSchema);
