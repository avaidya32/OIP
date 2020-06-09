const mongoose = require('mongoose');

const HackathonsSchema = new mongoose.Schema({
    ClientId:{
        type:String,
        required:[false],
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
        required: [false, "Please add Mode"],
        unique: false,
        trim: true,
        maxLength: [10, "Mode can't be more than 10 characters"],
    },
    Date:{
        type: Date,
        required: [false, "Please add Date"],
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
        required: [false, "Please add Duration"],
        unique: false,
        trim: true,
        maxLength: [10, "Duration can't be more than 10 characters"]
    },
    Statement:{
        type: String,
        required: [false, "Please add Problem Statement"],
        unique: false,
        trim: true,
        maxLength: [3000, "Statement can't be more than 3000 characters"]

    },
    Reward:{
        type: String,
        required: [false, "Please add Reward"],
        unique: false,
        trim: true,
        maxLength: [100, "Reward can't be more than 100 characters"]
    },
    Reward2:{
        type: String,
        required: [false, "Please add Reward"],
        unique: false,
        trim: true,
        maxLength: [100, "Reward can't be more than 100 characters"]
    },
    Reward3:{
        type: String,
        required: [false, "Please add Reward"],
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
    Phase1:{
        type:Object,
        required: false,
        unique: false,
        trim: true,
    },
    Phase2:{
        type:Object,
        required: false,
        unique: false,
        trim: true,
    },
    Phase3:{
        type:Object,
        required: false,
        unique: false,
        trim: true,
    },
    Phase4:{
        type:Object,
        required: false,
        unique: false,
        trim: true,
    },
    Phase5:{
        type:Object,
        required: false,
        unique: false,
        trim: true,
    },
    Phase6:{
        type:Object,
        required: false,
        unique: false,
        trim: true,
    },
    Type:{
        type:String,
        trim: true,
    },
    isPublic:{
        type:Boolean,
        trim:true,
    },
    ProgLanguage:{
        type: String,
        trim: true,
    },
    TargetGroup:{
        type:String,
        trim: true,
    },
    Application:{
        type:String,
        trim: true,
    },
    Cause:{
        type:String,
        trim: true,
    },
    JobDetails:{
        type: String,
        trim: true,
    }
});
mongoose.model("Hackathons", HackathonsSchema);