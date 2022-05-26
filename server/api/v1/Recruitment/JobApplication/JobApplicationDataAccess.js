const JobApplication = require("../../../services/database").JobApplication;

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
		return await JobApplication(data).save();
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
		return await JobApplication.findByIdAndUpdate(filter,update,{returnOriginal: false});
	} catch (error) {
		console.log(error);
	}
}

async function remove(id) {
	console.log(id);

	try {
		return await JobApplication.findByIdAndDelete({ _id: id });
	} catch (error) {
		console.log(error);
	}
}

async function findOne(query) {
	return await JobApplication.findOne(query).exec();
}

async function findAll() {
	return await JobApplication.find().exec();
}
