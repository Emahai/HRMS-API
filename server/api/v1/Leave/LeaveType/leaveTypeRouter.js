const router = require('express').Router();
const leaveTypeController = require('./leaveTypeController');

router.post('/', leaveTypeController.create);
router.put('/', leaveTypeController.update);
router.delete('/:id', leaveTypeController.remove);
router.get('/:id', leaveTypeController.getById);
router.get('/', leaveTypeController.getAll);

module.exports = router;

