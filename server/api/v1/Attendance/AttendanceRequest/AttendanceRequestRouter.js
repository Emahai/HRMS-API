const router = require('express').Router();
const attendanceRequest = require('./AttendanceRequestController');

router.post('/', attendanceRequest.create);
router.put('/', attendanceRequest.update);
router.delete('/:id', attendanceRequest.remove);
router.get('/:id', attendanceRequest.getById);
router.get('/', attendanceRequest.getAll);

module.exports = router;

