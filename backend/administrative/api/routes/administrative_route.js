const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');
const administrative_controller = require('../controllers/administrative_controller');
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  :::::::::::::::::::   REPORTES    :::::::::::::::::::
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
router.get('/report/1', authenticate_token, administrative_controller.get_report_1);
router.get('/report/2', authenticate_token, administrative_controller.get_report_2);
router.get('/report/3', authenticate_token, administrative_controller.get_report_3);
router.get('/report/4', authenticate_token, administrative_controller.get_report_4);
router.get('/report/5', authenticate_token, administrative_controller.get_report_5);
router.get('/report/6', authenticate_token, administrative_controller.get_report_6);
router.get('/report/7', authenticate_token, administrative_controller.get_report_7);
router.get('/report/8', authenticate_token, administrative_controller.get_report_8);
router.get('/report/9', authenticate_token, administrative_controller.get_report_9);
router.get('/report/10', authenticate_token, administrative_controller.get_report_10);
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  :::::::::::::::::::   CRUD USER    :::::::::::::::::::
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
router.post('/user', authenticate_token, administrative_controller.create_user);
router.put('/user/status', authenticate_token, administrative_controller.update_user_status);
router.put('/user', authenticate_token, administrative_controller.update_user);
router.get('/', authenticate_token, administrative_controller.get_user);
// ||||||||||||||||||||   AUTENTICAR TOKEN   ||||||||||||||||||||
function authenticate_token(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        if (id_user_rol.id_rol != 1) return res.status(400).send({msg: 'Solamente los clientes pueden acceder a esta direccion.'});
        next();
    });
}

module.exports = router