const express = require('express');
const router = new express.Router();
const team_controller = require('../controllers/team_controller');

router.get('/team', team_controller.get_team);
router.post('/team', team_controller.create_team);
router.put('/team', team_controller.edit_team);
router.delete('/team', team_controller.delete_team);

module.exports = router