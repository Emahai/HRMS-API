const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const designationSchema = new Schema({
	designationName: {
		type: String,
	},
	skill: {
		type: String,
	},
	designationDescription: {
		type: String,
	}
});

designationSchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("designation", designationSchema);
