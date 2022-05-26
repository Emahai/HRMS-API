const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attendanceRequest = new Schema({
	employee_id: {
		type: String,
	},
	name: {
		type: String,
	},
    department:{
        type: String,
    },
	attendanceDate: {
		type: String,
	},
	from_date: {
		type: String,
	},
	to_date: {
		type: String,
	},
    reason: {
		type: String,
	},
    explanation: {
		type: String,
	},
});

attendanceRequest.set("toJSON", { virtuals: false });

module.exports = mongoose.model("attendanceRequest", attendanceRequest);
