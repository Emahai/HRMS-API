const dal = require('./attendanceListDataAccess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((attendanceList) => {
      if (!attendanceList) {
        return res.status(404).json({
          message: 'attendanceList not found with id ' + id,
        });
      }
      res.status(201).json(attendanceList);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting attendanceList.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((attendanceLists) => {
      res.status(201).json(attendanceLists);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting attendanceLists.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const attendanceList = req.body;
  dal
    .create(attendanceList)
    .then((attendanceList) => {
      if (!attendanceList) {
        return res.status(404).json({
          message: 'attendanceList not found with id ' + id,
        });
      }
      res.status(201).json(attendanceList);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating attendanceList.',
        error: err,
      });
    });
}

function update(req, res, next) {
  const data = req.body;

  dal
    .update(data)
    .then((attendanceList) => {
      if (!attendanceList) {
        return res.status(404).json({
          message: 'attendanceList not found with id ' + data.id,
        });
      }
      res.status(201).json(attendanceList);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting attendanceList.',
        error: err,
      });
    });
}

function remove(req, res, next) {
  const {id} = req.params;

  dal
    .remove(id)
    .then((attendanceList) => {
      if (!attendanceList) {
        return res.status(404).json({
          message: 'attendanceList not found with id ' + id,
        });
      }
      res.status(201).json(attendanceList);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating attendanceList.',
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
