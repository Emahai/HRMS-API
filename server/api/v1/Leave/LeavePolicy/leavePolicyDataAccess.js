const LeavePolicy = require("../../../services/database").LeavePolicy;

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
		return await LeavePolicy(data).save();
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
		return await LeavePolicy.findByIdAndUpdate(filter,update,{returnOriginal: false});
	} catch (error) {
		console.log(error);
	}
}

async function remove(id) {
	console.log(id);

	try {
		return await LeavePolicy.findByIdAndDelete({ _id: id });
	} catch (error) {
		console.log(error);
	}
}

async function findOne(query) {
	return await LeavePolicy.findOne(query).exec();
}

async function findAll() {
	return await LeavePolicy.find().exec();
}
