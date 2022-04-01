const compm = require('../models/competition_model');

module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get_competition: function(req, res)   {
      compm.get_competition(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al obtener competencia(s).',
            data: [],
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: rows,
            msg: 'Competencia(s) obtenida(s) con exito.'
          });
        }
      });
    },
// ||||||||||||||||||||   CREAR   ||||||||||||||||||||
    create_competition: async function(req, res) {
      compm.create_competition(req.con, req.body, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al crear competencia.',
            data: [],
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            msg: 'Competencia creada con exito.',
            data: [],
            id_competition: rows.insertId
          });
        }
      });  
    },
// ||||||||||||||||||||   EDITAR   ||||||||||||||||||||
    edit_competition: async function(req, res) {
      compm.edit_competition(req.con, req.body, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al actualizar competencia.',
            data: [],
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(400).send({
              status: false,
              msg: 'Error al actualizar competencia.',
              data: [],
              error: 'No existe, el ID indicado.'
            });
          } else {
            res.status(200).send({
              status: true,
              msg: 'Competencia actualizada con exito.',
              data: []
            });
          }
        }
      });
    },
// ||||||||||||||||||||   ELIMINAR   ||||||||||||||||||||
    delete_competition: async function(req, res) {
      compm.delete_competition(req.con, req.query.id, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al eliminar competencia.',
            data: [],
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(400).send({
              status: false,
              msg: 'Error al eliminar competencia.',
              data: [],
              error: 'No existe, el ID indicado.'
            });
          } else {
            res.status(200).send({
              status: true,
              msg: 'Competencia eliminada con exito.',
              data: []
            });
          }
        }
      });  
    },
  }