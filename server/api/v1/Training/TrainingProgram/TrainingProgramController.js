const dal = require("./TrainingProgramDataAccess");

function getById(req, res, next) {
	const { id } = req.params;

	dal
		.findOne({ _id: id })
		.then((program) => {
			if (!program) {
				return res.status(404).json({
					message: "program not found with id " + id,
				});
			}
			res.status(201).json(program);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting program.",
				error: err,
			});
		});
}

function getAll(req, res, next) {
	dal
		.findAll()
		.then((programs) => {
			res.status(201).json(programs);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting programs.",
				error: err,
			});
		});
}

function create(req, res, next) {
	let program = req.body;
	dal
		.create(program)
		.then((program) => {
			if (!program) {
				return res.status(404).json({
					message: "program not found with id " + id,
				});
			}
			res.status(201).json(program);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when creating program.",
				error: err,
			});
		});
}

function remove(req, res, next) {
	const { id } = req.params;

	dal
		.remove(id)
		.then((program) => {
			if (!program) {
				return res.status(404).json({
					message: "program not found with id " + id,
				});
			}
			res.status(201).json(program);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when deleting program.",
				error: err,
			});
		});
}

function update(req, res, next) {
	let data = req.body;

	dal
		.update(data)
		.then((program) => {
			if (!program) {
				return res.status(404).json({
					message: 'program not found with id ' + data.id,
				});
			}
			res.status(201).json(program);
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Error when getting program.',
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
