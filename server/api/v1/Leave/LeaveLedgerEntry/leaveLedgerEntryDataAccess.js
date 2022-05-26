const LeaveLedgerEntry = require("../../../services/database").LeaveLedgerEntry;

module.exports = {
	create,
	findOne,
	findAll,
	update,
	remove
};

async function create(data) {
	console.log(data);
	try {
		return await LeaveLedgerEntry(data).save();
	} catch (error) {
		console.log(error);
	}
}

async function update(data) {
	console.log(data);
	const filter = { _id: data.id };
	delete data.id;
	const update = data;

	try {
		return await LeaveLedgerEntry.findByIdAndUpdate(filter,update,{returnOriginal: false});
	} catch (error) {
		console.log(error);
	}
}

async function remove(id) {
	console.log(id);

	try {
		return await LeaveLedgerEntry.findByIdAndDelete({ _id: id });
	} catch (error) {
		console.log(error);
	}
}

async function findOne(query) {
	return await LeaveLedgerEntry.findOne(query).exec();
}

async function findAll() {
	return await LeaveLedgerEntry.find().exec();
}
