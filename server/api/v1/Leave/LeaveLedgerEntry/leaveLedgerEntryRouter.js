const router = require('express').Router();
const leaveLedgerEntryController = require('./leaveLedgerEntryController');

router.post('/', leaveLedgerEntryController.create);
router.put('/', leaveLedgerEntryController.update);
router.delete('/:id', leaveLedgerEntryController.remove);
router.get('/:id', leaveLedgerEntryController.getById);
router.get('/', leaveLedgerEntryController.getAll);

module.exports = router;

