const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobOpeningSchema = new Schema({
	jobTitle: {
		type: String,
	},
	company: {
		type: String,
	},
	status: {
		type: String,
	},
	designation: {
		type: String,
	},
	department: {
		type: String,
	},
	stuffPlan: {
		type: String,
	},
	plannedNumberPositions: {
		type: Number,
	},
});

jobOpeningSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("jobOpening", jobOpeningSchema);
