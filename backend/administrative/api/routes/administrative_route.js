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

// *************************************************
// ****************     EQUIPO     ****************
// *************************************************
router.get('/team', administrative_controller.get_team);
router.post('/team', administrative_controller.create_team);
router.put('/team', administrative_controller.edit_team);
router.delete('/team', administrative_controller.delete_team);

// *************************************************
// ****************     NOTICIA     ****************
// *************************************************

router.post('/notice', administrative_controller.create_noticia);
router.get('/notice', administrative_controller.get_noticia);

// *****************************************************
// ****************     COMPETICION     ****************
// *****************************************************

router.get('/competition', administrative_controller.get_competition);
router.get('/league', administrative_controller.create_league);


module.exports = router