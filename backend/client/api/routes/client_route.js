const express = require('express');
const router = new express.Router();
const client_controller = require('../controllers/client_controller');

router.get('/', client_controller.get);
router.post('/register', client_controller.create);
router.put('/', client_controller.update);
router.delete('/:id', client_controller.delete);
router.post('/membership', client_controller.buy_membership);
router.put('/membership', client_controller.cancel_membership);
router.post('/follow', client_controller.follow_team);
router.get('/follow', client_controller.favorite_teams);
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  :::::::::::::::::::   REPORTES    :::::::::::::::::::
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
router.get('/report/1/', client_controller.get_report_1);
router.get('/report/2/', client_controller.get_report_2);
router.get('/report/3/', client_controller.get_report_3);
router.get('/report/4/', client_controller.get_report_4);
router.get('/report/5/', client_controller.get_report_5);
router.get('/report/6/', client_controller.get_report_6);
router.get('/report/7/', client_controller.get_report_7);
router.get('/report/8/', client_controller.get_report_8);
router.get('/report/9/', client_controller.get_report_9);

module.exports = router