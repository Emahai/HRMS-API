const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeListSchema = new Schema({
	fullname: {
		type: String,
	},
	date: {
		type: String,
	},
	age: {
		type: String,
	},
	position: {
		type: String,
	},
	qualification: {
		type: String,
	},
	designation: {
		type: String,
	},
	contactInfo: {
		type: String,
	},
	personalDetails: {
		type: String,
	}
});

employeeListSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("employeeList", employeeListSchema);
