const dal = require('./departmentDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((department) => {
      if (!department) {
        return res.status(404).json({
          message: 'department not found with id ' + id,
        });
      }
      res.status(201).json(department);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting department.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((departments) => {
      res.status(201).json(departments);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting departments.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const department = req.body;
  dal
    .create(department)
    .then((department) => {
      if (!department) {
        return res.status(404).json({
          message: 'department not found with id ' + id,
        });
      }
      res.status(201).json(department);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating department.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((department) => {
      if (!department) {
        return res.status(404).json({
          message: 'department not found with id ' + data.id,
        });
      }
      res.status(201).json(department);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting department.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((department) => {
      if (!department) {
        return res.status(404).json({
          message: 'department not found with id ' + id,
        });
      }
      res.status(201).json(department);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating department.',
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
