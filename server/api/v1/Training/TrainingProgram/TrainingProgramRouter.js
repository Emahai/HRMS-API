const router = require('express').Router();
const TrainingProgramController = require('./TrainingProgramController');

router.post('/', TrainingProgramController.create);
router.get('/:id', TrainingProgramController.getById);
router.get('/', TrainingProgramController.getAll);
router.delete('/:id', TrainingProgramController.remove);
router.put('/', TrainingProgramController.update);

module.exports = router;