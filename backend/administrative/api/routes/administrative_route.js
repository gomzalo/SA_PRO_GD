const express = require('express');
const router = new express.Router();
const administrative_controller = require('../controllers/administrative_controller');

// *****************************************************
// ****************     ESTADIO     ********************
// *****************************************************

router.get('/stadium', administrative_controller.get_stadium);
router.post('/stadium', administrative_controller.create_stadium);
router.put('/stadium', administrative_controller.edit_stadium);
router.delete('/stadium', administrative_controller.delete_stadium);

// *************************************************
// ****************     EQUIPO     ****************
// *************************************************

// *************************************************
// ****************     NOTICIA     ****************
// *************************************************

// *****************************************************
// ****************     COMPETICION     ****************
// *****************************************************

// *****************************************************
// ****************     PARTIDO     ********************
// *****************************************************

module.exports = router