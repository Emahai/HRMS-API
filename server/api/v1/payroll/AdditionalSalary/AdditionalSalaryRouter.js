const router = require('express').Router();
const staffingController = require('./AdditionalSalaryModel');

router.post('/', staffingController.create);
router.get('/:id', staffingController.getById);
router.get('/', staffingController.getAll);
router.delete('/:id', staffingController.remove);
router.put('/', staffingController.update);

module.exports = router;

