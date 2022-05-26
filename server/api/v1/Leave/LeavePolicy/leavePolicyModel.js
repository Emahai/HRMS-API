const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const leavePolicySchema = new Schema({
	leave_type: {
		type: String,
	},
	annual_allocation: {
		type: String,
	}
});

leavePolicySchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("leavepolicy", leavePolicySchema);
