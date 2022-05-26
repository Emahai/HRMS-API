const dal = require('./holidayListDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((holiday) => {
      if (!holiday) {
        return res.status(404).json({
          message: 'holiday not found with id ' + id,
        });
      }
      res.status(201).json(holiday);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting holiday.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((holidays) => {
      res.status(201).json(holidays);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting holidays.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const holiday = req.body;
  dal
    .create(holiday)
    .then((holiday) => {
      if (!holiday) {
        return res.status(404).json({
          message: 'holiday not found with id ' + id,
        });
      }
      res.status(201).json(holiday);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating holiday.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((holiday) => {
      if (!holiday) {
        return res.status(404).json({
          message: 'holiday not found with id ' + data.id,
        });
      }
      res.status(201).json(holiday);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting holiday.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((holiday) => {
      if (!holiday) {
        return res.status(404).json({
          message: 'holiday not found with id ' + id,
        });
      }
      res.status(201).json(holiday);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating holiday.',
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
