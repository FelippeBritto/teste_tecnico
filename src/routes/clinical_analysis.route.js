const express =  require('express');
const router = express.Router();
const controller = require('../controllers/clinical_analysis.controller');

router.post('/:token', controller.post)
router.get('/:token', controller.get)

module.exports = router;