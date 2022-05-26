const LeavePolicyAssignment = require("../../../services/database").LeavePolicyAssignment;

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
		return await LeavePolicyAssignment(data).save();
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
		return await LeavePolicyAssignment.findByIdAndUpdate(filter,update,{returnOriginal: false});
	} catch (error) {
		console.log(error);
	}
}

async function remove(id) {
	console.log(id);

	try {
		return await LeavePolicyAssignment.findByIdAndDelete({ _id: id });
	} catch (error) {
		console.log(error);
	}
}

async function findOne(query) {
	return await LeavePolicyAssignment.findOne(query).exec();
}

async function findAll() {
	return await LeavePolicyAssignment.find().exec();
}
