const Appointment = require("../../../services/database").Appointment;

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
		return await Appointment(data).save();
	} catch (error) {
		console.log(error);
	}
}

async function findOne(query) {
	return await Appointment.findOne(query).exec();
}

async function findAll() {
	return await Appointment.find().exec();
}

async function remove(id) {
	console.log(id);

	try {
		return await Appointment.findByIdAndDelete({ _id: id });
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
		return await Appointment.findByIdAndUpdate(filter, update, {
			returnOriginal: false,
		});
	} catch (error) {
		console.log(error);
	}
}
