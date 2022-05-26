const dal = require('./AttendanceRequestDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((attendanceRequest) => {
      if (!attendanceRequest) {
        return res.status(404).json({
          message: 'attendanceRequest not found with id ' + id,
        });
      }
      res.status(201).json(attendanceRequest);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting attendanceRequest.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((attendanceRequests) => {
      res.status(201).json(attendanceRequests);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting attendanceRequests.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const attendanceRequest = req.body;
  dal
    .create(attendanceRequest)
    .then((attendanceRequest) => {
      if (!attendanceRequest) {
        return res.status(404).json({
          message: 'attendanceRequest not found with id ' + id,
        });
      }
      res.status(201).json(attendanceRequest);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating attendanceRequest.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((attendanceRequest) => {
      if (!attendanceRequest) {
        return res.status(404).json({
          message: 'attendanceRequest not found with id ' + data.id,
        });
      }
      res.status(201).json(attendanceRequest);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting attendanceRequest.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((attendanceRequest) => {
      if (!attendanceRequest) {
        return res.status(404).json({
          message: 'attendanceRequest not found with id ' + id,
        });
      }
      res.status(201).json(attendanceRequest);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating attendanceRequest.',
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
