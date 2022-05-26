const dal = require('./leavePolicyDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((leavePolicy) => {
      if (!leavePolicy) {
        return res.status(404).json({
          message: 'leavePolicy not found with id ' + id,
        });
      }
      res.status(201).json(leavePolicy);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leavePolicy.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((leavePolicys) => {
      res.status(201).json(leavePolicys);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leavePolicys.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const leavePolicy = req.body;
  dal
    .create(leavePolicy)
    .then((leavePolicy) => {
      if (!leavePolicy) {
        return res.status(404).json({
          message: 'leavePolicy not found with id ' + id,
        });
      }
      res.status(201).json(leavePolicy);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating leavePolicy.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((leavePolicy) => {
      if (!leavePolicy) {
        return res.status(404).json({
          message: 'leavePolicy not found with id ' + data.id,
        });
      }
      res.status(201).json(leavePolicy);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leavePolicy.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((leavePolicy) => {
      if (!leavePolicy) {
        return res.status(404).json({
          message: 'leavePolicy not found with id ' + id,
        });
      }
      res.status(201).json(leavePolicy);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating leavePolicy.',
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
