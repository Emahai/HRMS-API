const dal = require('./leavePolicyAssignmentDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((leavePolicyAssignment) => {
      if (!leavePolicyAssignment) {
        return res.status(404).json({
          message: 'leavePolicyAssignment not found with id ' + id,
        });
      }
      res.status(201).json(leavePolicyAssignment);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leavePolicyAssignment.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((leavePolicyAssignments) => {
      res.status(201).json(leavePolicyAssignments);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leavePolicyAssignments.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const leavePolicyAssignment = req.body;
  dal
    .create(leavePolicyAssignment)
    .then((leavePolicyAssignment) => {
      if (!leavePolicyAssignment) {
        return res.status(404).json({
          message: 'leavePolicyAssignment not found with id ' + id,
        });
      }
      res.status(201).json(leavePolicyAssignment);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating leavePolicyAssignment.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((leavePolicyAssignment) => {
      if (!leavePolicyAssignment) {
        return res.status(404).json({
          message: 'leavePolicyAssignment not found with id ' + data.id,
        });
      }
      res.status(201).json(leavePolicyAssignment);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leavePolicyAssignment.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((leavePolicyAssignment) => {
      if (!leavePolicyAssignment) {
        return res.status(404).json({
          message: 'leavePolicyAssignment not found with id ' + id,
        });
      }
      res.status(201).json(leavePolicyAssignment);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating leavePolicyAssignment.',
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
