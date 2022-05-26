const dal = require('./branchDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((branch) => {
      if (!branch) {
        return res.status(404).json({
          message: 'branch not found with id ' + id,
        });
      }
      res.status(201).json(branch);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting branch.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((branch) => {
      res.status(201).json(branch);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting branch.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const branch = req.body;

  console.log("Branch controller create ");
  dal
    .create(branch)
    .then((branch) => {
      if (!branch) {
        return res.status(404).json({
          message: 'branch not found with id ' + id,
        });
      }
      res.status(201).json(branch);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating branch.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((branch) => {
      if (!branch) {
        return res.status(404).json({
          message: 'branch not found with id ' + data.id,
        });
      }
      res.status(201).json(branch);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting branch.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((branch) => {
      if (!branch) {
        return res.status(404).json({
          message: 'branch not found with id ' + id,
        });
      }
      res.status(201).json(branch);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating branch.',
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
