const mongoose = require('mongoose');

const HackathonsSchema = new mongoose.Schema({
    ClientId:{
        type:String,
        require:[true],
        unique:false,
        trim:true
    },
    OrgName:{
        type: String,
        required: [false],
        unique: false,
        trim: true,
        maxLength: [100, "Organisation Name can't be more than 100 characters"]

    },
    ProblemName:{
        type: String,
        required: [true, "Please add Problem Name"],
        unique: false,
        trim: true,
        maxLength: [100, "Name can't be more than 100 characters"]

    },
    Mode:{
        type: String,
        required: [true, "Please add Mode"],
        unique: false,
        trim: true,
        maxLength: [10, "Mode can't be more than 10 characters"],
    },
    Date:{
        type: Date,
        required: [true, "Please add Date"],
        unique: false,
        trim: true,
        //maxLength: [100, "Name can't be more than 100 characters"]
    },
    Venue:{
        type: String,
        required: [false],
        unique: false,
        trim: true,
        maxLength: [200, "Venue can't be more than 200 characters"]
    },
    Duration:{
        type: Number,
        required: [true, "Please add Duration"],
        unique: false,
        trim: true,
        maxLength: [10, "Duration can't be more than 10 characters"]
    },
    Statement:{
        type: String,
        required: [true, "Please add Problem Statement"],
        unique: false,
        trim: true,
        maxLength: [3000, "Statement can't be more than 3000 characters"]

    },
    Reward:{
        type: String,
        required: [true, "Please add Reward"],
        unique: false,
        trim: true,
        maxLength: [100, "Reward can't be more than 100 characters"]
    },
    Link:{
        type: String,
        required: [false],
        unique: false,
        trim: true,
        maxLength: [100, "Name can't be more than 100 characters"]

    },
    // username:{
    //     type: String,
    //     required: [true, "Please add Name"],
    //     unique: true,
    //     trim: true,
    //     maxLength: [40, "Username can't be more than 40 characters"]
    // }
});
mongoose.model("Hackathons", HackathonsSchema);