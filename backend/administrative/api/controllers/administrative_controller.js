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


// *************************************************
// ****************     EQUIPO     ****************
// *************************************************

create_team: async function(req, res) {
  administrativem.create_team(req.con, req.body, async function(err, rows){
    if(err){
      res.status(500).send({
        status: false,
        data: [],
        msj: 'Error al crear equipo',
        error: err.toString()
      });
    } else {
      res.status(200).send({
        status: true,
        data: [],
        msj: 'Equipo creado con exito'
      });
    }
  });  
},

get_team: function(req, res)   {
  administrativem.get_team(req.con, req.query, function(err, rows){
    console.log(req.query);
    if(err){
      res.status(500).send({
        status: false,
        data: [],
        msj: 'Error al obtener equipo(s)',
        error: err.toString()
      });
    } else {
      res.status(200).send({
        status: true,
        data: rows,
        msj: 'Información de equipo(s)'
      });
    }
  });
},

edit_team: async function(req, res) {
  administrativem.edit_team(req.con, req.body, async function(err, rows){
    if(err){
      res.status(500).send({
        status: false,
        data: [],
        msj: 'Error al actualizar equipo',
        error: err.toString()
      });
    } else {
      if(rows.affectedRows < 1){
        res.status(500).send({
          status: false,
          data: [],
          msj: 'Error al actualizar equipo',
          error: 'No existe, el ID indicado'
        });
      } else {
        res.status(200).send({
          status: true,
          data: [],
          msj: 'Equipo actualizado'
        });
      }
    }
  });
},

delete_team: async function(req, res) {
  administrativem.delete_team(req.con, req.query.id, async function(err, rows){
    if(err){
      res.status(500).send({
        status: false,
        data: [],
        msj: 'Error al eliminar equipo',
        error: err.toString()
      });
    } else {
      if(rows.affectedRows < 1){
        res.status(500).send({
          status: false,
          data: [],
          msj: 'Error al eliminar equipo',
          error: 'No existe, el ID indicado'
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msj: 'Equipo eliminado'
        });
      }
    }
  });  
},

// *************************************************
// ****************     NOTICIA     ****************
// *************************************************

create_noticia: async function(req, res) {
  administrativem.create_noticia(req.con, req.body, async function(err, rows){
    if(err){
      res.status(500).send({
        status: false,
        data: [],
        msj: 'Error al crear noticia',
        error: err.toString()
      });
    } else {
      res.status(200).send({
        status: true,
        data: [],
        msj: 'Noticia creada con exito'
      });
    }
  });  
},

get_noticia: function(req, res)   {
  administrativem.get_noticia(req.con, req.query, function(err, rows){
    console.log(req.query);
    if(err){
      res.status(500).send({
        status: false,
        data: [],
        msj: 'Error al obtener noticia(s)',
        error: err.toString()
      });
    } else {
      res.status(200).send({
        status: true,
        data: rows,
        msj: 'Información de noticia(s)'
      });
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

    create_league: async function(req, res) {
      administrativem.create_league(req.con, req.body, async function(err, rows){
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

  }