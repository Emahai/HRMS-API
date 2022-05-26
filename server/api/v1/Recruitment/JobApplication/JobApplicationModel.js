const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JobApplicationSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	jobopening: {
		type: String,
	},
	source: {
		type: String,
	},
	phonenumber: {
		type: String,
	},
	estimated_cost: {
		type: String,
	},
	total_estimated_cost: {
		type: String,
	},
	rating: {
		type: String,
	},
});

JobApplicationSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("jobapplication", JobApplicationSchema);
