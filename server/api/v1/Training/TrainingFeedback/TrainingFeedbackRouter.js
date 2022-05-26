const router = require('express').Router();
const TrainingFeedbackController = require('./TrainingFeedbackController');

router.post('/', TrainingFeedbackController.create);
router.get('/:id', TrainingFeedbackController.getById);
router.get('/', TrainingFeedbackController.getAll);
router.delete('/:id', TrainingFeedbackController.remove);
router.put('/', TrainingFeedbackController.update);

module.exports = router;