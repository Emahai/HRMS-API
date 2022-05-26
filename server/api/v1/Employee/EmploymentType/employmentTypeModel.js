const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employmentTypeSchema = new Schema({
	name: {
		type: String,
	},
	employmentType: {
		type: String,
	},
	description: {
		type: String,
	},
	date: {
		type: String,
	},
});

employmentTypeSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("employmentType", employmentTypeSchema);
