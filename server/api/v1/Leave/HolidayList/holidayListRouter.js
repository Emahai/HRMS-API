const router = require('express').Router();
const holidayListController = require('./holidayListController');

router.post('/', holidayListController.create);
router.put('/', holidayListController.update);
router.delete('/:id', holidayListController.remove);
router.get('/:id', holidayListController.getById);
router.get('/', holidayListController.getAll);

module.exports = router;

