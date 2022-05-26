const dal = require('./designationDataAccess');

function getById(req, res) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((designation) => {
      if (!designation) {
        return res.status(404).json({
          message: 'designation not found with id ' + id,
        });
      }
      res.status(201).json(designation);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting designation.',
        error: err,
      });
    });
}

function getAll(req, res) {
  dal
    .findAll()
    .then((designations) => {
      res.status(201).json(designations);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting designations.',
        error: err,
      });
    });
}

function create(req, res) {
  const designation = req.body;
  dal
    .create(designation)
    .then((designation) => {
      if (!designation) {
        return res.status(404).json({
          message: 'designation not found with id ' + id,
        });
      }
      res.status(201).json(designation);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating designation.',
        error: err,
      });
    });
}

function update(req, res) {
  const data = req.body;

  dal
    .update(data)
    .then((designation) => {
      if (!designation) {
        return res.status(404).json({
          message: 'designation not found with id ' + data.id,
        });
      }
      res.status(201).json(designation);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting designation.',
        error: err,
      });
    });
}

function remove(req, res) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((designation) => {
      if (!designation) {
        return res.status(404).json({
          message: 'designation not found with id ' + id,
        });
      }
      res.status(201).json(designation);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating designation.',
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
