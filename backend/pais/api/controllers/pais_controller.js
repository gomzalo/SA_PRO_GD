const paism = require('../models/pais_model');
const jwt = require('jsonwebtoken');

module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get: function(req, res) {
      paism.get(req.con, req.query, function(err, rows) {
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al obtener (los) pais(s).',
            data: [],
            error: err.toString()
          });
        } else {
          let newRows = rows.map(item => {
            item.id = item.id_pais;
            delete item["id_pais"];
            return item;
          });
          res.status(200).send({
            status: true,
            msg: 'Se han obtenido (los) pais(es).',
            data: newRows
          });
        }
      })
    }
  }
// ||||||||||||||||||||   AUTENTICAR TOKEN   ||||||||||||||||||||
  function authenticate_token(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        next();
    });
  }