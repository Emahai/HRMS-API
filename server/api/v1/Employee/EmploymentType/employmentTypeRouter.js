const router = require('express').Router();
const employmentTypeController = require('./employmentTypeController');

router.post('/', employmentTypeController.create);
router.put('/', employmentTypeController.update);
router.delete('/:id', employmentTypeController.remove);
router.get('/:id', employmentTypeController.getById);
router.get('/', employmentTypeController.getAll);

module.exports = router;

