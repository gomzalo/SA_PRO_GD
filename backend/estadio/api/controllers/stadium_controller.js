
const stadiumm = require('../models/stadium_model');

module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get_stadium: function(req, res)   {
      stadiumm.get_stadium(req.con, req.query, function(err, rows){
        console.log(req.query);
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al obtener estadio(s).',
            data: [],
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            msg: 'Estadio(s) obtenido(s) con exito.',
            data: rows
          });
        }
      });
    },
// ||||||||||||||||||||   CREAR   ||||||||||||||||||||
    create_stadium: async function(req, res) {
      stadiumm.create_stadium(req.con, req.body, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al crear estadio.',
            data: [],
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            msg: 'Estadio creado con exito.',
            data: []
          });
        }
      });  
    },
// ||||||||||||||||||||   EDITAR   ||||||||||||||||||||
    edit_stadium: async function(req, res) {
      stadiumm.edit_stadium(req.con, req.body, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al actualizar estadio.',
            data: [],
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(400).send({
              status: false,
              msg: 'Error al actualizar estadio.',
              data: [],
              error: 'No existe, el ID indicado.'
            });
          } else {
            res.status(200).send({
              status: true,      
              msg: 'Estadio actualizado con exito.',
              data: []
            });
          }
        }
      });
    },
// ||||||||||||||||||||   ELIMINAR   ||||||||||||||||||||
    delete_stadium: async function(req, res) {
      stadiumm.delete_stadium(req.con, req.query.id, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            data: [],
            msg: 'Error al eliminar estadio.',
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(400).send({
              status: false,
              data: [],
              msg: 'Error al eliminar estadio.',
              error: 'No existe, el ID indicado.'
            });
          } else {
            res.status(200).send({
              status: true,
              data: rows,
              msg: 'Estadio eliminado con exito.'
            });
          }
        }
      });  
    },
  }
