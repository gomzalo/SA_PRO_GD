const express = require('express');
const router = new express.Router();
const dt_controller = require('../controllers/dt_controller');
const jwt = require('jsonwebtoken');

router.get('/technical-director', dt_controller.get_dt);
router.post('/technical-director', authenticate_token, dt_controller.create_dt);
router.put('/technical-director', authenticate_token, dt_controller.edit_dt);
router.delete('/technical-director', authenticate_token, dt_controller.delete_dt);
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