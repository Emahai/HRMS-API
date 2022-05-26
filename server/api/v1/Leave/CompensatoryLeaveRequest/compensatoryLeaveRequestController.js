const dal = require('./compensatoryLeaveRequestDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((compensatoryLeaveRequest) => {
      if (!compensatoryLeaveRequest) {
        return res.status(404).json({
          message: 'CompensatoryLeaveRequest not found with id ' + id,
        });
      }
      res.status(201).json(compensatoryLeaveRequest);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting CompensatoryLeaveRequest.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((compensatoryLeaveRequests) => {
      res.status(201).json(compensatoryLeaveRequests);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting CompensatoryLeaveRequests.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const compensatoryLeaveRequest = req.body;
  dal
    .create(compensatoryLeaveRequest)
    .then((compensatoryLeaveRequest) => {
      if (!compensatoryLeaveRequest) {
        return res.status(404).json({
          message: 'CompensatoryLeaveRequest not found with id ' + id,
        });
      }
      res.status(201).json(compensatoryLeaveRequest);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating CompensatoryLeaveRequest.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((compensatoryLeaveRequest) => {
      if (!compensatoryLeaveRequest) {
        return res.status(404).json({
          message: 'CompensatoryLeaveRequest not found with id ' + data.id,
        });
      }
      res.status(201).json(compensatoryLeaveRequest);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting CompensatoryLeaveRequest.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((compensatoryLeaveRequest) => {
      if (!compensatoryLeaveRequest) {
        return res.status(404).json({
          message: 'CompensatoryLeaveRequest not found with id ' + id,
        });
      }
      res.status(201).json(compensatoryLeaveRequest);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating CompensatoryLeaveRequest.',
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
