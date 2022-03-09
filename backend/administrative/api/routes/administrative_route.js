const express = require('express');
const router = new express.Router();
const administrative_controller = require('../controllers/administrative_controller');

router.get('/all', administrative_controller.all);
router.get('/all_countries', administrative_controller.all_countries);
router.post('/create', administrative_controller.create);
router.get('/email_confirmation', administrative_controller.email_confirmation);
router.post('/send_email_confirmation', administrative_controller.send_email);

module.exports = router