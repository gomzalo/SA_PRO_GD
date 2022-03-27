const express = require('express');
const router = new express.Router();
const dt_controller = require('../controllers/dt_controller');

router.get('/technical-director', dt_controller.get_dt);
router.post('/technical-director', dt_controller.create_dt);
router.put('/technical-director', dt_controller.edit_dt);
router.delete('/technical-director', dt_controller.delete_dt);

module.exports = router