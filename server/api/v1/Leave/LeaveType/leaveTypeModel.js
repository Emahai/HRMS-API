const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const leaveTypeSchema = new Schema({
	max_leave_allowed: {
		type: String,
	},
	applicable_after: {
		type: String,
	},
	max_continuos_days: {
		type: String,
	},
	earned_leave_frequency: {
		type: String,
	},
	rounding: {
		type: String,
	},
	type: {
		type: String
	}	
});

leaveTypeSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("leavetype", leaveTypeSchema);
