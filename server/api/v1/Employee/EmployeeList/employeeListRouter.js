const router = require('express').Router();
const employeeListController = require('./employeeListController');

router.post('/', employeeListController.create);
router.put('/', employeeListController.update);
router.delete('/:id', employeeListController.remove);
router.get('/:id', employeeListController.getById);
router.get('/', employeeListController.getAll);

module.exports = router;

