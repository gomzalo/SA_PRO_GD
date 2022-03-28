const express = require('express');
const router = new express.Router();
const administrative_controller = require('../controllers/administrative_controller');

router.get('/report/6', administrative_controller.get_report_6);
router.get('/report/7', administrative_controller.get_report_7);
router.get('/report/8', administrative_controller.get_report_8);
router.get('/report/9', administrative_controller.get_report_9);
router.get('/report/10', administrative_controller.get_report_10);
router.post('/user', administrative_controller.create_user);
router.put('/user/status', administrative_controller.update_user_status);
router.put('/user', administrative_controller.update_user);
router.get('/', administrative_controller.get_user);


module.exports = router