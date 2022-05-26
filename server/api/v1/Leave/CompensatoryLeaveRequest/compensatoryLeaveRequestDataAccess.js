const CompensatoryLeaveRequest = require("../../../services/database").CompensatoryLeaveRequest;

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
		return await CompensatoryLeaveRequest(data).save();
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
		return await CompensatoryLeaveRequest.findByIdAndUpdate(filter,update,{returnOriginal: false});
	} catch (error) {
		console.log(error);
	}
}

async function remove(id) {
	console.log(id);

	try {
		return await CompensatoryLeaveRequest.findByIdAndDelete({ _id: id });
	} catch (error) {
		console.log(error);
	}
}

async function findOne(query) {
	return await CompensatoryLeaveRequest.findOne(query).exec();
}

async function findAll() {
	return await CompensatoryLeaveRequest.find().exec();
}
