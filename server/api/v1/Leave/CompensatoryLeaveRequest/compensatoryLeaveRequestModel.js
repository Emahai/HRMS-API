const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const compensatoryLeaveRequestSchema = new Schema({
	employee_id: {
		type: String,
	},
	employee_name: {
		type: String,
	},
	leave_type: {
		type: String,
	},
	work_from_date: {
		type: String,
	},
	work_to_date: {
		type: String,
	},
	reason: {
		type: String,
	}
});

compensatoryLeaveRequestSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("compensatoryleaverequest", compensatoryLeaveRequestSchema);
