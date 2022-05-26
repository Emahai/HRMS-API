const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
	departement: {
		type: String,
	},
	company: {
		type: String,
	},
	parentCompany: {
		type: String,
	},
	expenseApproverName: {
		type: String,
	},
	leaveApproverName: {
		type: String,
	},
});

departmentSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("department", departmentSchema);
