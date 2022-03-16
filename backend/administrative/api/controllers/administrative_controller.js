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
    },
    
// *****************************************************
// ****************     PARTIDO     ********************
// *****************************************************

    get_game: function(req, res)   {
      administrativem.get_game(req.con, req.query, function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al obtener partido(s)',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: rows,
            msj: 'Información de partido(s)'
          });
        }
      });
    },

    create_game: async function(req, res) {
      administrativem.create_game(req.con, req.body, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al guardar partido',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msj: 'Partido guardado con éxito',
            id_competition: rows.insertId
          });
        }
      });  
    },

    edit_game: async function(req, res) {
      administrativem.edit_game(req.con, req.body, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al actualizar partido',
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(500).send({
              status: false,
              data: [],
              msj: 'Error al actualizar partido',
              error: 'No existe, el ID indicado'
            });
          } else {
            res.status(200).send({
              status: true,
              data: [],
              msj: 'Partido actualizado'
            });
          }
        }
      });
    },

    delete_game: async function(req, res) {
      administrativem.delete_game(req.con, req.query.id, async function(err, rows){
        if(err){
          res.status(500).send({
            status: false,
            data: [],
            msj: 'Error al eliminar partido',
            error: err.toString()
          });
        } else {
          if(rows.affectedRows < 1){
            res.status(500).send({
              status: false,
              data: [],
              msj: 'Error al eliminar partido',
              error: 'No existe, el ID indicado'
            });
          } else {
            res.status(200).send({
              status: true,
              idChampionship: req.query.id,
              msj: 'Partido eliminado'
            });
          }
        }
      });  
    }

  }