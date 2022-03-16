const express = require('express');
const router = new express.Router();
const administrative_controller = require('../controllers/administrative_controller');

router.get('/all_countries', administrative_controller.all_countries);

// *****************************************************
// ****************     ESTADIO     ********************
// *****************************************************

router.get('/stadium', administrative_controller.get_stadium);
router.post('/stadium', administrative_controller.create_stadium);
router.put('/stadium', administrative_controller.edit_stadium);
router.delete('/stadium', administrative_controller.delete_stadium);

// *****************************************************
// ****************     COMPETICION     ****************
// *****************************************************

router.get('/competition', administrative_controller.get_competition);
router.post('/competition', administrative_controller.create_competition);
router.put('/competition', administrative_controller.edit_competition);
router.delete('/competition', administrative_controller.delete_competition);

// *****************************************************
// ****************     PARTIDO     ********************
// *****************************************************

router.get('/soccer-game', administrative_controller.get_game);
router.post('/soccer-game', administrative_controller.create_game);
router.put('/soccer-game', administrative_controller.edit_game);
router.delete('/soccer-game', administrative_controller.delete_game);

module.exports = router