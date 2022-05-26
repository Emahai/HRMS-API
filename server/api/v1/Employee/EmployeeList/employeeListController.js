const dal = require('./employeeListDataAccess');

function getById(req, res) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((employeeList) => {
      if (!employeeList) {
        return res.status(404).json({
          message: 'employeeList not found with id ' + id,
        });
      }
      res.status(201).json(employeeList);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting employeeList.',
        error: err,
      });
    });
}

function getAll(req, res) {
  dal
    .findAll()
    .then((employeeLists) => {
      res.status(201).json(employeeLists);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting employeeLists.',
        error: err,
      });
    });
}

function create(req, res) {
  const employeeList = req.body;
  dal
    .create(employeeList)
    .then((employeeList) => {
      if (!employeeList) {
        return res.status(404).json({
          message: 'employeeList not found with id ' + id,
        });
      }
      res.status(201).json(employeeList);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating employeeList.',
        error: err,
      });
    });
}

function update(req, res) {
  const data = req.body;

  dal
    .update(data)
    .then((employeeList) => {
      if (!employeeList) {
        return res.status(404).json({
          message: 'employeeList not found with id ' + data.id,
        });
      }
      res.status(201).json(employeeList);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting employeeList.',
        error: err,
      });
    });
}

function remove(req, res) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((employeeList) => {
      if (!employeeList) {
        return res.status(404).json({
          message: 'employeeList not found with id ' + id,
        });
      }
      res.status(201).json(employeeList);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating employeeList.',
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
