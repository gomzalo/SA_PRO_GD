const express = require('express');
const router = new express.Router();
const player_controller = require('../controllers/player_controller');

router.get('/player', player_controller.get_player);
router.post('/player', player_controller.create_player);
router.put('/player', player_controller.edit_player);
router.delete('/player', player_controller.delete_player);

module.exports = router