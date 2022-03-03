const express = require('express');
const router = new express.Router();
const client_controller = require('../controllers/client_controller');

router.get('/all', client_controller.all);
router.get('/all_countries', client_controller.all_countries);
router.post('/create', client_controller.create);
router.get('/email_confirmation', client_controller.email_confirmation);
router.post('/send_email_confirmation', client_controller.send_email);

module.exports = router