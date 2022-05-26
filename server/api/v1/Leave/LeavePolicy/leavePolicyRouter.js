const router = require('express').Router();
const leavePolicyController = require('./leavePolicyController');

router.post('/', leavePolicyController.create);
router.put('/', leavePolicyController.update);
router.delete('/:id', leavePolicyController.remove);
router.get('/:id', leavePolicyController.getById);
router.get('/', leavePolicyController.getAll);

module.exports = router;

