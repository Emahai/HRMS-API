const dal = require("./TrainingFeedbackDataAccess");

function getById(req, res, next) {
	const { id } = req.params;

	dal
		.findOne({ _id: id })
		.then((feedback) => {
			if (!feedback) {
				return res.status(404).json({
					message: "feedback not found with id " + id,
				});
			}
			res.status(201).json(feedback);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting feedback.",
				error: err,
			});
		});
}

function getAll(req, res, next) {
	dal
		.findAll()
		.then((feedbacks) => {
			res.status(201).json(feedbacks);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting feedbacks.",
				error: err,
			});
		});
}

function create(req, res, next) {
	let feedback = req.body;
	dal
		.create(feedback)
		.then((feedback) => {
			if (!feedback) {
				return res.status(404).json({
					message: "feedback not found with id " + id,
				});
			}
			res.status(201).json(feedback);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when creating feedback.",
				error: err,
			});
		});
}

function remove(req, res, next) {
	const { id } = req.params;

	dal
		.remove(id)
		.then((feedback) => {
			if (!feedback) {
				return res.status(404).json({
					message: "feedback not found with id " + id,
				});
			}
			res.status(201).json(feedback);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when deleting feedback.",
				error: err,
			});
		});
}

function update(req, res, next) {
	let data = req.body;

	dal
		.update(data)
		.then((feedback) => {
			if (!feedback) {
				return res.status(404).json({
					message: 'feedback not found with id ' + data.id,
				});
			}
			res.status(201).json(feedback);
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Error when getting feedback.',
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
