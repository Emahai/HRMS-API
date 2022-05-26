const dal = require("./AppointmentDataAccess");

function getById(req, res, next) {
	const { id } = req.params;

	dal
		.findOne({ _id: id })
		.then((appointment) => {
			if (!appointment) {
				return res.status(404).json({
					message: "appointment not found with id " + id,
				});
			}
			res.status(201).json(appointment);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting appointment.",
				error: err,
			});
		});
}

function getAll(req, res, next) {
	dal
		.findAll()
		.then((appointments) => {
			res.status(201).json(appointments);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting appointments.",
				error: err,
			});
		});
}

function create(req, res, next) {
	let appointment = req.body;
	dal
		.create(appointment)
		.then((appointment) => {
			if (!appointment) {
				return res.status(404).json({
					message: "appointment not found with id " + id,
				});
			}
			res.status(201).json(appointment);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when creating appointment.",
				error: err,
			});
		});
}

function remove(req, res, next) {
	const { id } = req.params;

	dal
		.remove(id)
		.then((appointment) => {
			if (!appointment) {
				return res.status(404).json({
					message: "appointment not found with id " + id,
				});
			}
			res.status(201).json(appointment);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when deleting appointment.",
				error: err,
			});
		});
}

function update(req, res, next) {
	let data = req.body;

	dal
		.update(data)
		.then((appointment) => {
			if (!appointment) {
				return res.status(404).json({
					message: 'appointment not found with id ' + data.id,
				});
			}
			res.status(201).json(appointment);
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Error when getting appointment.',
				error: err,
			});
		});
}

module.exports = {
	getById,
	getAll,
	create,
	remove,
	update
};
