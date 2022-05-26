const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrainingFeedback = new Schema({
    employeeId: {
        type: String,
    },
    employeeName: {
        type: String,
    },
    programName: {
        type: String,
    },
    feedback: {
        type: String,
    }
});

TrainingFeedback.set("toJSON", { virtuals: false });

module.exports = mongoose.model("TrainingFeedback", TrainingFeedback);
