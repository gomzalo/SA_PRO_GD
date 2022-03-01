const express = require('express');
const router = new express.Router();
const user_controller = require('../controllers/user_controller');

router.get('/all', user_controller.all);
router.get('/all_countries', user_controller.all_countries);
router.post('/add', user_controller.add);
router.post('/login', user_controller.login);
router.get('/email_confirmation', user_controller.email_confirmation);
router.post('/send_email_confirmation', user_controller.send_email);

module.exports = router