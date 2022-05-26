const EmployeeReferral = require("../../../services/database").EmployeeReferral;

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
		return await EmployeeReferral(data).save();
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
		return await EmployeeReferral.findByIdAndUpdate(filter,update,{returnOriginal: false});
	} catch (error) {
		console.log(error);
	}
}

async function remove(id) {
	console.log(id);

	try {
		return await EmployeeReferral.findByIdAndDelete({ _id: id });
	} catch (error) {
		console.log(error);
	}
}

async function findOne(query) {
	return await EmployeeReferral.findOne(query).exec();
}

async function findAll() {
	return await EmployeeReferral.find().exec();
}
