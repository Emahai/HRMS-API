const LeaveType = require("../../../services/database").LeaveType;

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
		return await LeaveType(data).save();
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
		return await LeaveType.findByIdAndUpdate(filter,update,{returnOriginal: false});
	} catch (error) {
		console.log(error);
	}
}

async function remove(id) {
	console.log(id);

	try {
		return await LeaveType.findByIdAndDelete({ _id: id });
	} catch (error) {
		console.log(error);
	}
}

async function findOne(query) {
	return await LeaveType.findOne(query).exec();
}

async function findAll() {
	return await LeaveType.find().exec();
}
