const router = require('express').Router();
const designationController = require('./designationController');

router.post('/', designationController.create);
router.put('/', designationController.update);
router.delete('/:id', designationController.remove);
router.get('/:id', designationController.getById);
router.get('/', designationController.getAll);


module.exports = router;

