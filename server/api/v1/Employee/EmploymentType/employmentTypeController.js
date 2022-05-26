const dal = require('./employmentTypeDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((employmentType) => {
      if (!employmentType) {
        return res.status(404).json({
          message: 'employmentType not found with id ' + id,
        });
      }
      res.status(201).json(employmentType);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting employmentType.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((employmentTypes) => {
      res.status(201).json(employmentTypes);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting employmentTypes.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const employmentType = req.body;
  dal
    .create(employmentType)
    .then((employmentType) => {
      if (!employmentType) {
        return res.status(404).json({
          message: 'employmentType not found with id ' + id,
        });
      }
      res.status(201).json(employmentType);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating employmentType.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((employmentType) => {
      if (!employmentType) {
        return res.status(404).json({
          message: 'employmentType not found with id ' + data.id,
        });
      }
      res.status(201).json(employmentType);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting employmentType.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((employmentType) => {
      if (!employmentType) {
        return res.status(404).json({
          message: 'employmentType not found with id ' + id,
        });
      }
      res.status(201).json(employmentType);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating employmentType.',
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
