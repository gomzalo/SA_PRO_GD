const express = require('express');
const jwt = require('jsonwebtoken');
const router = new express.Router();
const employee_controller = require('../controllers/employee_controller');

router.post('/player-transfer', authenticate_token, employee_controller.player_transfer);
router.get('/player-transfer', employee_controller.get_player_transfers);
router.post('/technical-director-transfer', authenticate_token, employee_controller.dt_transfer);
router.get('/technical-director-transfer', employee_controller.get_dt_transfers);
router.post('/incidence', authenticate_token, employee_controller.incidencia);
// ||||||||||||||||||||   AUTENTICAR TOKEN   ||||||||||||||||||||
function authenticate_token(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        if (!(id_user_rol.id_rol === 1 || id_user_rol.id_rol === 2)) return res.status(401).send({msg: 'Solamente los empleados o administradores pueden acceder a esta direccion.'});
        next();
    });
}
module.exports = router