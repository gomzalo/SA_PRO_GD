const express = require('express');
const router = new express.Router();
const employee_controller = require('../controllers/employee_controller');

router.post('/player-transfer', employee_controller.player_transfer);
router.post('/employee', employee_controller.player_transfer);
router.put('/employee', employee_controller.edit_employee);
router.delete('/employee', employee_controller.delete_employee);

module.exports = router