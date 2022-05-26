const dal = require("./JobOfferDataAccess");

function getById(req, res, next) {
	const { id } = req.params;
	dal
		.findOne({ _id: id })
		.then((offer) => {
			if (!offer) {
				return res.status(404).json({
					message: "offer not found with id " + id,
				});
			}
			res.status(201).json(offer);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting offer.",
				error: err,
			});
		});
}

function getAll(req, res, next) {
	dal
		.findAll()
		.then((offers) => {
			res.status(201).json(offers);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when getting offers.",
				error: err,
			});
		});
}

function create(req, res, next) {
	let offer = req.body;
	dal
		.create(offer)
		.then((offer) => {
			if (!offer) {
				return res.status(404).json({
					message: "offer not found with id " + id,
				});
			}
			res.status(201).json(offer);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when creating offer.",
				error: err,
			});
		});
}

function remove(req, res, next) {
	const { id } = req.params;

	dal
		.remove(id)
		.then((offer) => {
			if (!offer) {
				return res.status(404).json({
					message: "offer not found with id " + id,
				});
			}
			res.status(201).json(offer);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error when deleting offer.",
				error: err,
			});
		});
}

function update(req, res, next) {
	let data = req.body;

	dal
		.update(data)
		.then((offer) => {
			if (!offer) {
				return res.status(404).json({
					message: 'offer not found with id ' + data.id,
				});
			}
			res.status(201).json(offer);
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Error when getting offer.',
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
