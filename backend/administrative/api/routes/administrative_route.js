const express = require('express');
const router = new express.Router();
const administrative_controller = require('../controllers/administrative_controller');

router.post('/all', administrative_controller.all);
router.get('/all_countries', administrative_controller.all_countries);

// *************************************************
// ****************     ESTADIO     ****************
// *************************************************

router.post('/stadium', administrative_controller.create)
router.get('/stadium', administrative_controller.get);
router.put('/stadium', administrative_controller.edit);
router.delete('/stadium', administrative_controller.delete);

module.exports = router