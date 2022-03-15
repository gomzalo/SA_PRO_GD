const express = require('express');
const router = new express.Router();
const administrative_controller = require('../controllers/administrative_controller');

router.get('/all_countries', administrative_controller.all_countries);

// *************************************************
// ****************     ESTADIO     ****************
// *************************************************

router.post('/stadium', administrative_controller.create_stadium);
router.get('/stadium', administrative_controller.get_stadium);
router.put('/stadium', administrative_controller.edit_stadium);
router.delete('/stadium', administrative_controller.delete_stadium);

// *****************************************************
// ****************     COMPETICION     ****************
// *****************************************************

router.get('/competition', administrative_controller.get_competition);
router.get('/league', administrative_controller.create_league);


module.exports = router