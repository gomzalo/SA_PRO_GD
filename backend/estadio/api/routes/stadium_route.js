const express = require('express');
const router = new express.Router();
const stadium_controller = require('../controllers/stadium_controller');
const jwt = require('jsonwebtoken');
/*
Estado (campo status):
    Disponible = 1
    Remodelación = 2
*/
router.get('/', stadium_controller.get_stadium);
router.post('/', authenticate_token, stadium_controller.create_stadium);
router.put('/', authenticate_token, stadium_controller.edit_stadium);
router.delete('/', authenticate_token, stadium_controller.delete_stadium);
// ||||||||||||||||||||   AUTENTICAR TOKEN   ||||||||||||||||||||
function authenticate_token(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        console.log(id_user_rol.id_rol);
        if (!(id_user_rol.id_rol === 1 || id_user_rol.id_rol === 2)) return res.status(401).send({msg: 'Solamente los empleados o administradores pueden acceder a esta direccion.'});
        next();
    });
}

module.exports = router;