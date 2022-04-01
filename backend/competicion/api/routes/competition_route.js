const express = require('express');
const router = new express.Router();
const competition_controller = require('../controllers/competition_controller');
const jwt = require('jsonwebtoken');
/*
Tipo (campo type):
    Liga = 1
    Eliminatoria = 2
    Copa = 3
    Super Copa = 4
    Cuadrangular = 5
    Triangular = 6
*/
router.get('/', competition_controller.get_competition);
router.post('/', authenticate_token, competition_controller.create_competition);
router.put('/', authenticate_token, competition_controller.edit_competition);
router.delete('/', authenticate_token, competition_controller.delete_competition);
// ||||||||||||||||||||   AUTENTICAR TOKEN   ||||||||||||||||||||
function authenticate_token(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        if (id_user_rol.id_rol != 1 || id_user_rol.id_rol != 2) return res.status(400).send({msg: 'Solamente los clientes pueden acceder a esta direccion.'});
        next();
    });
}
module.exports = router