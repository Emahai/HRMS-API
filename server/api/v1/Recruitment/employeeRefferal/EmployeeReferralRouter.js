const router = require('express').Router();
const empployeeReferralController = require('./EmployeeReferralController');

router.post('/', empployeeReferralController.create);
router.get('/:id', empployeeReferralController.getById);
router.get('/', empployeeReferralController.getAll);
router.delete('/:id', empployeeReferralController.remove);
router.put('/', empployeeReferralController.update);

module.exports = router;