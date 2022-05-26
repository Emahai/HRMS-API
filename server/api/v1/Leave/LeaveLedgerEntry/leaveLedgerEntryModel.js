const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const leaveLedgerEntrySchema = new Schema({
	employee_id: {
		type: String,
	},
	employee_name: {
		type: String,
	},
	leave_type: {
		type: String,
	},
	leaves: {
		type: String,
	},
	transaction_type: {
		type: String,
	},
	transaction_name: {
		type: String
	}	
});

leaveLedgerEntrySchema.set("toJSON", { virtuals: false });

module.exports = mongoose.model("leaveledgerentry", leaveLedgerEntrySchema);
