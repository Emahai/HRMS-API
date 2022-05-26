const Staffing = require("../../../services/database").Staffing;

module.exports = {
	create,
	findOne,
	findAll,
	remove,
	update,
};

async function create(data) {
	console.log(data);
	try {
		return await Staffing(data).save();
	} catch (error) {
		console.log(error);
	}
}

async function findOne(query) {
	return await Staffing.findOne(query).exec();
}

async function findAll() {
	return await Staffing.find().exec();
}

async function remove(id) {
	console.log(id);

	try {
		return await Staffing.findByIdAndDelete({ _id: id });
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
		return await Staffing.findByIdAndUpdate(filter, update, {
			returnOriginal: false,
		});
	} catch (error) {
		console.log(error);
	}
}
