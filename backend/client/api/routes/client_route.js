const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');
const client_controller = require('../controllers/client_controller');

router.get('/', authenticate_token_get, client_controller.get);
router.post('/register', client_controller.create);
router.put('/', authenticate_token, client_controller.update);
router.delete('/', authenticate_token, client_controller.delete);
router.post('/membership', authenticate_token_membership, client_controller.buy_membership);
router.put('/membership', authenticate_token_membership, client_controller.cancel_membership);
router.post('/follow', authenticate_token, authenticate_token, client_controller.follow_team);
router.get('/follow', authenticate_token, client_controller.favorite_teams);
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  :::::::::::::::::::   REPORTES    :::::::::::::::::::
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
router.get('/report/1/', authenticate_token, client_controller.get_report_1);
router.get('/report/2/', authenticate_token, client_controller.get_report_2);
router.get('/report/3/', authenticate_token, client_controller.get_report_3);
router.get('/report/4/', authenticate_token, client_controller.get_report_4);
router.get('/report/5/', authenticate_token, client_controller.get_report_5);
router.get('/report/6/', authenticate_token, client_controller.get_report_6);
router.get('/report/7/', authenticate_token, client_controller.get_report_7);
router.get('/report/8/', authenticate_token, client_controller.get_report_8);
router.get('/report/9/', authenticate_token, client_controller.get_report_9);
router.get('/report/10/', authenticate_token, client_controller.get_report_10);
router.get('/report/11/', authenticate_token, client_controller.get_report_11);
router.get('/report/12/', authenticate_token, client_controller.get_report_12);
router.post('/report/13/', authenticate_token, client_controller.get_report_13);
router.post('/report/14/', authenticate_token, client_controller.get_report_14);
router.get('/report/15/', authenticate_token, client_controller.get_report_15);
router.get('/report/16/', authenticate_token, client_controller.get_report_16);
router.get('/report/17/', authenticate_token, client_controller.get_report_17);

// ||||||||||||||||||||   AUTENTICAR TOKEN   ||||||||||||||||||||
function authenticate_token(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        if (!(id_user_rol.id_rol === 3)) return res.status(401).send({msg: 'Solamente los clientes pueden acceder a esta direccion.'});
        next();
    });
}

function authenticate_token_membership(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        if (!(id_user_rol.id_rol === 3 || id_user_rol.id_rol === 1)) return res.status(401).send({msg: 'Solamente los clientes pueden acceder a esta direccion.'});
        next();
    });
}

function authenticate_token_get(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        next();
    });
}

module.exports = router