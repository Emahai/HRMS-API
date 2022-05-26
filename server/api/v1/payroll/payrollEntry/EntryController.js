const dal = require("./EntryDataAccess");

function getById(req, res, next) {
	const { id } = req.params;

	dal
		.findOne({ _id: id })
		.then((entry) => {
			if (!entry) {
				return res.status(404).json({
					message: "entry not found with id " + id,
				});
			}
			res.status(201).json(entry);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting entry.",
				error: err,
			});
		});
}

function getAll(req, res, next) {
	dal
		.findAll()
		.then((entrys) => {
			res.status(201).json(entrys);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting entrys.",
				error: err,
			});
		});
}

function create(req, res, next) {
	let entry = req.body;
	dal
		.create(entry)
		.then((entry) => {
			if (!entry) {
				return res.status(404).json({
					message: "entry not found with id " + id,
				});
			}
			res.status(201).json(entry);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when creating entry.",
				error: err,
			});
		});
}

function remove(req, res, next) {
	const { id } = req.params;

	dal
		.remove(id)
		.then((entry) => {
			if (!entry) {
				return res.status(404).json({
					message: "entry not found with id " + id,
				});
			}
			res.status(201).json(entry);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when deleting entry.",
				error: err,
			});
		});
}

function update(req, res, next) {
	let data = req.body;

	dal
		.update(data)
		.then((entry) => {
			if (!entry) {
				return res.status(404).json({
					message: 'entry not found with id ' + data.id,
				});
			}
			res.status(201).json(entry);
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Error when getting entry.',
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
