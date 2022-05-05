const express = require('express');
const jwt = require('jsonwebtoken');
const router = new express.Router();
const prediction_controller = require('../controllers/prediction_controller');

router.post('/predict', prediction_controller.get_prediccion);
router.get('/player-transfer', prediction_controller.get_player_transfers);
router.post('/technical-director-transfer', authenticate_token, prediction_controller.dt_transfer);
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