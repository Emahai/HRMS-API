const dal = require('./leaveLedgerEntryDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((leaveLedger) => {
      if (!leaveLedger) {
        return res.status(404).json({
          message: 'leaveLedger not found with id ' + id,
        });
      }
      res.status(201).json(leaveLedger);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leaveLedger.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((leaveLedgers) => {
      res.status(201).json(leaveLedgers);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leaveLedgers.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const leaveLedger = req.body;
  dal
    .create(leaveLedger)
    .then((leaveLedger) => {
      if (!leaveLedger) {
        return res.status(404).json({
          message: 'leaveLedger not found with id ' + id,
        });
      }
      res.status(201).json(leaveLedger);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating leaveLedger.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((leaveLedger) => {
      if (!leaveLedger) {
        return res.status(404).json({
          message: 'leaveLedger not found with id ' + data.id,
        });
      }
      res.status(201).json(leaveLedger);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting leaveLedger.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((leaveLedger) => {
      if (!leaveLedger) {
        return res.status(404).json({
          message: 'leaveLedger not found with id ' + id,
        });
      }
      res.status(201).json(leaveLedger);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating leaveLedger.',
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
