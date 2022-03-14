const administrativem = require('../models/administrative_model');
var cryptoJS = require('crypto-js');

module.exports = {
    all_countries: function(req, res) {
      administrativem.all_countries(req.con, function(err, rows) {
        res.status(200).send(rows);
      })
    },

    create: async function(req, res) {
      administrativem.create(req.con, req.body, async function(err, rows){
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
            data: rows,
            msj: 'Estadio creado con exito'
          });
        }
      });  
    },

    get: function(req, res)   {
      administrativem.get(req.con, req.query.id, function(err, rows){
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
            msj: 'Información de estadio(s)',
            error: err.toString()
          });
        }
      });
    },

    edit: async function(req, res) {
      administrativem.edit(req.con, req.body, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al eliminar estadio',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: rows,
            msj: 'Estadio eliminado',
            error: err.toString()
          });
        }
      });  
    },

    delete: async function(req, res) {
      administrativem.delete(req.con, req.query.id, async function(err, rows){
        if(err){
          res.status(409).send(
            
          );
        } else {
          res.status(200).send(
            
          );
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
    }
  }