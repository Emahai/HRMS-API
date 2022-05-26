const router = require('express').Router();
const compensatoryLeaveRequestController = require('./compensatoryLeaveRequestController');

router.post('/', compensatoryLeaveRequestController.create);
router.put('/', compensatoryLeaveRequestController.update);
router.delete('/:id', compensatoryLeaveRequestController.remove);
router.get('/:id', compensatoryLeaveRequestController.getById);
router.get('/', compensatoryLeaveRequestController.getAll);

module.exports = router;

