const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const holidaySchema = new Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	from_date: {
		type: String,
	},
	to_date: {
		type: String,
	}
});

holidaySchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("holiday", holidaySchema);
