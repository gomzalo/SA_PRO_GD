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
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  :::::::::::::::::::   REPORTES    :::::::::::::::::::
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/** -----------------   1 - 
 * Query Params: ?id_team=number&player=boolean 
 * 
 * player es un booleano representado por los valores 0 y 1
 *  0: Jugadores
 *  1: Técnico
 * 
 */
router.get('/report/1/')


module.exports = router