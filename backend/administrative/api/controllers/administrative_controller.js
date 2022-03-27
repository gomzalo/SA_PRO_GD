const administrativem = require('../models/administrative_model');
var cryptoJS = require('crypto-js');

module.exports = {
// *************************************************
// ****************     ESTADIO     ****************
// *************************************************

    create_stadium: async function(req, res) {
      administrativem.create_stadium(req.con, req.body, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al crear estadio',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msj: 'Estadio creado con exito'
          });
        }
      });  
    },

    get_stadium: function(req, res)   {
      administrativem.get_stadium(req.con, req.query, function(err, rows){
        console.log(req.query);
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al obtener estadio(s)',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: rows,
            msj: 'Información de estadio(s)'
          });
        }
      });
    },

    edit_stadium: async function(req, res) {
      administrativem.edit_stadium(req.con, req.body, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al actualizar estadio',
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(500).send({
              status: false,
              data: [],
              msj: 'Error al actualizar estadio',
              error: 'No existe, el ID indicado'
            });
          } else {
            res.status(200).send({
              status: true,
              data: [],
              msj: 'Estadio actualizado'
            });
          }
        }
      });
    },

    delete_stadium: async function(req, res) {
      administrativem.delete_stadium(req.con, req.query.id, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al eliminar estadio',
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(500).send({
              status: false,
              data: [],
              msj: 'Error al eliminar estadio',
              error: 'No existe, el ID indicado'
            });
          } else {
            res.status(200).send({
              status: true,
              data: rows,
              msj: 'Estadio eliminado'
            });
          }
        }
      });  
    },


// *************************************************
// ****************     EQUIPO     ****************
// *************************************************

// *************************************************
// ****************     NOTICIA     ****************
// *************************************************

// *****************************************************
// ****************     COMPETICION     ****************
// *****************************************************
    
// *****************************************************
// ****************     PARTIDO     ********************
// *****************************************************
    
  }