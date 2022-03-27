const matchm = require('../models/partido_model');
const jwt = require('jsonwebtoken');

module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get_game: function(req, res)   {
      matchm.get_game(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al obtener partido(s).',
            data: [],
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            msg: 'Partido(s) obtenido(s) con exito.',
            data: rows
          });
        }
      });
    },
// ||||||||||||||||||||   CREAR   ||||||||||||||||||||
    create_game: async function(req, res) {
      matchm.create_game(req.con, req.body, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al crear partido.',
            data: [],
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            msg: 'Partido creado con éxito.',
            data: [],
            id_competition: rows.insertId
          });
        }
      });  
    },
// ||||||||||||||||||||   EDITAR   ||||||||||||||||||||
    edit_game: async function(req, res) {
      matchm.edit_game(req.con, req.body, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al actualizar partido.',
            data: [],
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(400).send({
              status: false,
              msg: 'Error al actualizar partido.',
              data: [],
              error: 'No existe, el ID indicado.'
            });
          } else {
            res.status(200).send({
              status: true,
              msg: 'Partido actualizado con exito.',
              data: []
            });
          }
        }
      });
    },
// ||||||||||||||||||||   ELIMINAR   ||||||||||||||||||||
    delete_game: async function(req, res) {
      matchm.delete_game(req.con, req.query.id, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            data: [],
            msg: 'Error al eliminar partido.',
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(400).send({
              status: false,
              data: [],
              msg: 'Error al eliminar partido.',
              error: 'No existe, el ID indicado'
            });
          } else {
            res.status(200).send({
              status: true,
              msg: 'Partido eliminado con exito.'
            });
          }
        }
      });  
    }
  }
//---------------------------------------------------
// ---------------  OTHER   -------------------------
//---------------------------------------------------
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