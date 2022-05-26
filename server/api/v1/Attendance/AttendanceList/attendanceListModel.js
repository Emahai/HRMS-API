const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attendanceListSchema = new Schema({
	employeeId: {
		type: String,
	},
	employeeName: {
		type: String,
	},
	attendanceDate: {
		type: String,
	},
	department: {
		type: String,
	},
	status: {
		type: String,
	},
});

attendanceListSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("attendanceList", attendanceListSchema);
