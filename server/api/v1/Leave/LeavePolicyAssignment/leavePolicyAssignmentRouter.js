const router = require('express').Router();
const leavePolicyAssignmentController = require('./leavePolicyAssignmentController');

router.post('/', leavePolicyAssignmentController.create);
router.put('/', leavePolicyAssignmentController.update);
router.delete('/:id', leavePolicyAssignmentController.remove);
router.get('/:id', leavePolicyAssignmentController.getById);
router.get('/', leavePolicyAssignmentController.getAll);

module.exports = router;

