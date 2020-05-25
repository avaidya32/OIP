const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema({
  
  Name: {
    type: String,
    required: [true, "Please add Name"],
    unique: false,
    trim: true,
    maxLength: [100, "Name can't be more than 100 characters"],
  },
  GoogleID: {
    type: String,
    required: false,
    unique: false
  },
  GithubID:{
    type:String,
    required: false,
    trim:true,
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
  University: {
    type: String,
    required: [true, "Please add University name"],
    unique: false,
    trim: true,
    maxLength: [100, "UniversityName can't be more than 100 characters"],
  },
  Year: {
    type: Number,
    required: [true, "Please add Year of study"],
    unique: false,
    trim: true,
    maxLength: 300,
  },
  Specialization: {
    type: String,
    required: [true, "Please add Specialization"],
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

mongoose.model("Students", StudentsSchema);
