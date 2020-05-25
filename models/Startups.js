const mongoose = require("mongoose");

const StartupsSchema = new mongoose.Schema({
  OrgName: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    maxLength: [100, "Organisation Name can't be more than 100 characters"],
  },
  Name: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxLength: [100, "Name can't be more than 100 characters"],
  },
  EmailID: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    maxLength: [60, "Email can't be more than 40 characters"],
  },
  GoogleID:{
    type: String,
    required:false,
    trim:true,
  },
  GithubID:{
    type: String,
    required:false,
    trim:true,
  },
  PhNumber: {
    type: Number,
    required: false,
    unique: true,
    trim: true,
    maxLength: 10,
  },
  Desc: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    maxLength: 300,
  },
  Sector: {
    type: String,
    required: false,
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
    required: false,
    unique: true,
    trim: true,
    maxLength: [40, "Username can't be more than 40 characters"],
  },
  password: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    maxLength: [40, "Password can't be more than 40 characters"],
  },
  Role:{
    type: String,
    required:true,
    trim:true,
  },
});

StartupsSchema.methods.validPassword = function( pwd ) {
  return ( this.password === pwd );
};

mongoose.model("Startups", StartupsSchema);
