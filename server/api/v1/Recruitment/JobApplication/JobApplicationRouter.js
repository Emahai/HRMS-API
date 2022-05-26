const router = require('express').Router();
const jobApplicationController = require('./JobApplicationController');

router.post('/', jobApplicationController.create);
router.get('/:id', jobApplicationController.getById);
router.get('/', jobApplicationController.getAll);
router.delete('/:id', jobApplicationController.remove);
router.put('/', jobApplicationController.update);

module.exports = router;