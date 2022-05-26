const dal = require('./JobApplicationDataAccess')

function getById(req, res, next) {
  const {id} = req.params;

  dal
    .findOne({ _id: id })
    .then((application) => {
      if (!application) {
        return res.status(404).json({
          message: 'Application not found with id ' + id,
        });
      }
      res.status(201).json(application);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting staffing.',
        error: err,
      });
    });
}

function getAll(req, res, next) {
  dal
    .findAll()
    .then((application) => {
      res.status(201).json(application);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error when getting application.',
        error: err,
      });
    });
}

function create(req, res, next) {
  const application = req.body;

  dal
    .create(application)
    .then((application) => {
      if (!application) {
        return res.status(404).json({
          message: 'application not found with id ' + id,
        });
      }
      res.status(201).json(application);
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
      .then((application) => {
        if (!application) {
          return res.status(404).json({
            message: 'application not found with id ' + data.id,
          });
        }
        res.status(201).json(application);
      })
      .catch((err) => {
        res.status(500).json({
          message: 'Error when getting application.',
          error: err,
        });
      });
  }
  
  function remove(req, res, next) {
    const {id} = req.params;
  
    dal
      .remove(id)
      .then((application) => {
        if (!application) {
          return res.status(404).json({
            message: 'application not found with id ' + id,
          });
        }
        res.status(201).json(application);
      })
      .catch((err) => {
        res.status(500).json({
          message: 'Error when creating job application.',
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
