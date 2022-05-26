const router = require('express').Router();
const attendanceListController = require('./attendanceListController');

router.post('/', attendanceListController.create);
router.put('/', attendanceListController.update);
router.delete('/:id', attendanceListController.remove);
router.get('/:id', attendanceListController.getById);
router.get('/', attendanceListController.getAll);

module.exports = router;

