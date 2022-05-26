const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const branchSchema = new Schema({
	companyName: {
		type: String,
	},
	branchName: {
		type: String,
	},
	location: {
		type: String,
	},
	startDate: {
		type: String,
	},
});

branchSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("branch", branchSchema);
