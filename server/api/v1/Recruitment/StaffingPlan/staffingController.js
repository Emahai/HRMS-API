const dal = require("./staffingDataAccess");

function getById(req, res, next) {
	const { id } = req.params;

	dal
		.findOne({ _id: id })
		.then((staffing) => {
			if (!staffing) {
				return res.status(404).json({
					message: "Staffing not found with id " + id,
				});
			}
			res.status(201).json(staffing);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting staffing.",
				error: err,
			});
		});
}

function getAll(req, res, next) {
	dal
		.findAll()
		.then((staffings) => {
			res.status(201).json(staffings);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting staffings.",
				error: err,
			});
		});
}

function create(req, res, next) {
	let staffing = req.body;
	dal
		.create(staffing)
		.then((staffing) => {
			if (!staffing) {
				return res.status(404).json({
					message: "Staffing not found with id " + id,
				});
			}
			res.status(201).json(staffing);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when creating staffing.",
				error: err,
			});
		});
}

function remove(req, res, next) {
	const { id } = req.params;

	dal
		.remove(id)
		.then((staffing) => {
			if (!staffing) {
				return res.status(404).json({
					message: "staffing not found with id " + id,
				});
			}
			res.status(201).json(staffing);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when deleting staffing.",
				error: err,
			});
		});
}

function update(req, res, next) {
	let data = req.body;

	dal
		.update(data)
		.then((staffing) => {
			if (!staffing) {
				return res.status(404).json({
					message: 'staffing not found with id ' + data.id,
				});
			}
			res.status(201).json(staffing);
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Error when getting staffing.',
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
