const express = require('express');
const router = new express.Router();
const employee_controller = require('../controllers/employee_controller');

router.post('/player-transfer', employee_controller.player_transfer);
router.get('/player-transfer', employee_controller.get_player_transfers);
router.post('/technical-director-transfer', employee_controller.dt_transfer);
router.get('/technical-director-transfer', employee_controller.get_dt_transfers);
//router.post('/incidence', employee_controller.incidence);


module.exports = router