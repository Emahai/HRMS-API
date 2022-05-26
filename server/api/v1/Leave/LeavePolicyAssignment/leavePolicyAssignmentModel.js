const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const leavePolicyAssignmentSchema = new Schema({
	employee_id: {
		type: String,
	},
	employee_name: {
		type: String,
	},
	company: {
		type: String,
	},
	leave_policy: {
		type: String,
	},
	based_on: {
		type: String,
	},
	leave_period: {
		type: String,
	},
	from_date: {
		type: String,
	},
	to_date: {
		type: String,
	}
});

leavePolicyAssignmentSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("leavepolicyassignment", leavePolicyAssignmentSchema);
