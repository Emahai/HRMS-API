const dal = require('./EmployeeReferralDataAcess');

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((employeeReferral) => {
      if (!employeeReferral) {
        return res.status(404).json({
          message: 'emplyoee Referral not found with id ' + id,
        });
      }
      res.status(201).json(employeeReferral);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error when getting staffing ${id}`,
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((emplyoeeReferral) => {
      res.status(201).json(emplyoeeReferral);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting emplyoeeReferral.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const emplyoeeReferral = req.body;

  dal
    .create(emplyoeeReferral)
    .then((emplyoeeReferral) => {
      if (!emplyoeeReferral) {
        return res.status(404).json({
          message: 'emplyoeeReferral not found with id ' + id,
        });
      }
      res.status(201).json(emplyoeeReferral);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when creating staffing.',
        error: err,
      });
    });
}

function update(req, res, next) {
    const data = req.body;
    dal
      .update(data)
      .then((emplyoeeReferral) => {
        if (!emplyoeeReferral) {
          return res.status(404).json({
            message: 'emplyoeeReferral not found with id ' + data.id,
          });
        }
        res.status(201).json(emplyoeeReferral);
      })
      .catch((err) => {
        res.status(500).json({
          message: 'Error when getting emplyoeeReferral.',
          error: err,
        });
      });
  }
  
  function remove(req, res, next) {
    const {id} = req.params;
  
    dal
      .remove(id)
      .then((emplyoeeReferral) => {
        if (!emplyoeeReferral) {
          return res.status(404).json({
            message: 'emplyoeeReferral not found with id ' + id,
          });
        }
        res.status(201).json(emplyoeeReferral);
      })
      .catch((err) => {
        res.status(500).json({
          message: 'Error when creating job emplyoeeReferral.',
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
