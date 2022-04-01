const express = require('express');
const router = new express.Router();
const partido_controller = require('../controllers/partido_controller');
const jwt = require('jsonwebtoken');
/*
Estados (campo status):
    Sin iniciar: 1
    Iniciado = 2
    Finalizado = 3
    Suspendido = 4
*/
router.get('/', partido_controller.get_game);
router.post('/', authenticate_token, partido_controller.create_game);
router.put('/', authenticate_token, partido_controller.edit_game);
router.delete('/', authenticate_token, partido_controller.delete_game);
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