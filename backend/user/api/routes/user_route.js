const express = require('express');
const router = new express.Router();
const user_controller = require('../controllers/user_controller');

router.get('/all', user_controller.index);
router.post('/add', user_controller.update);

module.exports = router