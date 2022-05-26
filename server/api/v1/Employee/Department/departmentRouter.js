const router = require('express').Router();
const departmentController = require('./departmentController');

router.post('/', departmentController.create);
router.put('/', departmentController.update);
router.delete('/:id', departmentController.remove);
router.get('/:id', departmentController.getById);
router.get('/', departmentController.getAll);

module.exports = router;

