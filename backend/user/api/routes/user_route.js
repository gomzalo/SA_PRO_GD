const express = require('express');
const router = new express.Router();
const user_controller = require('../controllers/user_controller');

router.get('/all', user_controller.all);
router.post('/add', user_controller.add);
router.get('/email_confirmation', user_controller.email_confirmation);

module.exports = router