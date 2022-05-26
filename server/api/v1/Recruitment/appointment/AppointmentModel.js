const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
	applicant_name: {
		type: String,
	},
	date: {
		type: String,
	},
	department: {
		type: String,
	},
	company: {
		type: String,
	},
	applicant: {
		type: String,
	},
	letter: {
		type: String,
	},
	status: {
		type: String,
	},
});

appointmentSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("appointment", appointmentSchema);
