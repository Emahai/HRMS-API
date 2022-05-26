const dal = require('./leaveTypeDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((leave) => {
      if (!leave) {
        return res.status(404).json({
          message: 'leave not found with id ' + id,
        });
      }
      res.status(201).json(leave);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leave.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((leaves) => {
      res.status(201).json(leaves);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leaves.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const leave = req.body;
  dal
    .create(leave)
    .then((leave) => {
      if (!leave) {
        return res.status(404).json({
          message: 'leave not found with id ' + id,
        });
      }
      res.status(201).json(leave);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating leave.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((leave) => {
      if (!leave) {
        return res.status(404).json({
          message: 'leave not found with id ' + data.id,
        });
      }
      res.status(201).json(leave);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leave.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((leave) => {
      if (!leave) {
        return res.status(404).json({
          message: 'leave not found with id ' + id,
        });
      }
      res.status(201).json(leave);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating leave.',
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
