const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [false, "Please add Name"],
    unique: false,
    trim: true,
    maxLength: [100, "Name can't be more than 100 characters"],
  },
  GoogleID: {
    type: String,
    required: false,
    unique: false,
  },
  GithubID: {
    type: String,
    required: false,
    trim: true,
  },
  EmailID: {
    type: String,
    required: [false, "Please add email"],
    unique: false,
    trim: true,
    maxLength: [60, "Email can't be more than 40 characters"],
  },
  PhNumber: {
    type: Number,
    required: [false, "Please add Phone Number"],
    unique: false,
    trim: true,
    maxLength: 10,
  },
  University: {
    type: String,
    required: [false, "Please add University name"],
    unique: false,
    trim: true,
    maxLength: [100, "UniversityName can't be more than 100 characters"],
  },
  Year: {
    type: Number,
    required: [false, "Please add Year of study"],
    unique: false,
    trim: true,
    maxLength: 300,
  },
  Specialization: {
    type: String,
    required: [false, "Please add Specialization"],
    unique: false,
    trim: true,
    maxLength: 30,
  },
  username: {
    type: String,
    required: [false, "Please add Name"],
    unique: true,
    trim: true,
    maxLength: [40, "Username can't be more than 40 characters"],
  },
  password: {
    type: String,
    required: [false, "Please add Password"],
    unique: true,
    trim: true,
    maxLength: [40, "Password can't be more than 40 characters"],
  },
  Role:{
    type:String,
    trim: true,
  }
});

mongoose.model("Students", StudentsSchema);
