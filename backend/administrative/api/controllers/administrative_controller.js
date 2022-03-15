const administrativem = require('../models/administrative_model');
var cryptoJS = require('crypto-js');

module.exports = {
    
    all_countries: function(req, res) {
      administrativem.all_countries(req.con, function(err, rows) {
        res.status(200).send(rows);
      })
    },

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

    validar_email(correo) {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(correo)) {
        return true;
      }
      return false;
    },

    validar_pass(pass, conf){
      if(pass == conf) {
        if(pass.length >= 8) {
            return true;
          }
      }  
      return false;
    },

// *****************************************************
// ****************     COMPETICION     ****************
// *****************************************************

    get_competition: function(req, res)   {
      administrativem.get_competition(req.con, req.query, function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al obtener competencia(s)',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: rows,
            msj: 'Información de competencia(s)'
          });
        }
      });
    },

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

    create_competition: async function(req, res) {
      administrativem.create_competition(req.con, req.body, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al crear competencia',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msj: 'Competition created succesfully',
            id_competition: rows.insertId
          });
        }
      });  
    },

    edit_competition: async function(req, res) {
      administrativem.edit_competition(req.con, req.body, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al actualizar competencia',
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(500).send({
              status: false,
              data: [],
              msj: 'Error al actualizar competencia',
              error: 'No existe, el ID indicado'
            });
          } else {
            res.status(200).send({
              status: true,
              data: [],
              msj: 'Competition updated succesfully'
            });
          }
        }
      });
    },

    delete_competition: async function(req, res) {
      administrativem.delete_competition(req.con, req.query.id, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al eliminar competencia',
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(500).send({
              status: false,
              data: [],
              msj: 'Error al eliminar competencia',
              error: 'No existe, el ID indicado'
            });
          } else {
            res.status(200).send({
              status: true,
              idChampionship: req.query.id,
              msj: 'Operation completed successfully'
            });
          }
        }
      });  
    }
    
  }