const router = require('express').Router();
const branchController = require('./branchController');

router.post('/', branchController.create);
router.put('/', branchController.update);
router.delete('/:id', branchController.remove);
router.get('/:id', branchController.getById);
router.get('/', branchController.getAll);

module.exports = router;

