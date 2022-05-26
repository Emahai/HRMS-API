const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeReferralSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	department: {
		type: String,
	},
	ref_name: {
		type: String,
	},
	ref_email: {
		type: String,
	},
	ref_pnumber: {
		type: String,
	},
	curr_position: {
		type: String,
	},
	dep_positon_to: {
		type: String,
	},
    position_to: {
		type: String,
	},
	cv: {
		type: String,
	},
	comment: {
		type: String,
	},
});

EmployeeReferralSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("employeeReferral", EmployeeReferralSchema);
