const express = require('express');
const router = new express.Router();
const player_controller = require('../controllers/player_controller');
const jwt = require('jsonwebtoken');

router.get('/player', player_controller.get_player);
router.post('/player', authenticate_token, player_controller.create_player);
router.put('/player', authenticate_token, player_controller.edit_player);
router.delete('/player', authenticate_token, player_controller.delete_player);
// ||||||||||||||||||||   AUTENTICAR TOKEN   ||||||||||||||||||||
function authenticate_token(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        if (id_user_rol.id_rol != 1 || id_user_rol.id_rol != 2) return res.status(401).send({msg: 'Solamente los empleados o administradores pueden acceder a esta direccion.'});
        next();
    });
}
module.exports = router