const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrainingProgram = new Schema({
    trainerName: {
        type: String,
    },
    trainerEmail: {
        type: String,
    },
    programTitle: {
        type: String,
    },
    introduction: {
        type: String,
    },
    type: {
        type: String,
    },
    location: {
        type: String,
    },
    startDate: {
        type: String,
    },
    endDate:{
        type: String,
    },
    description:{
        type:String,
    }
});

TrainingProgram.set("toJSON", { virtuals: false });

module.exports = mongoose.model("TrainingProgram", TrainingProgram);
