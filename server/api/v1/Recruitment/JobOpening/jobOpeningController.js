const dal = require('./jobOpeningDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((jobOpening) => {
      if (!jobOpening) {
        return res.status(404).json({
          message: 'jobOpening not found with id ' + id,
        });
      }
      res.status(201).json(jobOpening);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting jobOpening.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((jobOpenings) => {
      res.status(201).json(jobOpenings);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting jobOpenings.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const jobOpening = req.body;
  dal
    .create(jobOpening)
    .then((jobOpening) => {
      if (!jobOpening) {
        return res.status(404).json({
          message: 'jobOpening not found with id ' + id,
        });
      }
      res.status(201).json(jobOpening);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating jobOpening.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((jobOpening) => {
      if (!jobOpening) {
        return res.status(404).json({
          message: 'jobOpening not found with id ' + data.id,
        });
      }
      res.status(201).json(jobOpening);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting jobOpening.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((jobOpening) => {
      if (!jobOpening) {
        return res.status(404).json({
          message: 'jobOpening not found with id ' + id,
        });
      }
      res.status(201).json(jobOpening);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating jobOpening.',
        error: err,
      });
    });
}

module.exports = {
  getById,
  getAll,
  create,
  update,
  remove,
};
