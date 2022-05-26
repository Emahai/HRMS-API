const router = require('express').Router();
const jobOpeningController = require('./jobOpeningController');

router.post('/', jobOpeningController.create);
router.put('/', jobOpeningController.update);
router.delete('/:id', jobOpeningController.remove);
router.get('/:id', jobOpeningController.getById);
router.get('/', jobOpeningController.getAll);

module.exports = router;

