const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');
const team_controller = require('../controllers/team_controller');

router.get('/team', team_controller.get_team);
router.post('/team', authenticate_token, team_controller.create_team);
router.put('/team', authenticate_token, team_controller.edit_team);
router.delete('/team', authenticate_token, team_controller.delete_team);
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

module.exports = router;