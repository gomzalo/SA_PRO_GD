const administrativem = require('../models/administrative_model');
var cryptoJS = require('crypto-js');

module.exports = {
  get_report_6: function(req, res)   {
    administrativem.get_report_6(req.con, req.query, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al obtener usuarios de x genero.',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msg: 'Usuarios de x genero obtenidos con éxito.'
        });
      }
    });
  },
  get_report_7: function(req, res)   {
    administrativem.get_report_7(req.con, req.query, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al obtener usuarios con al menos x años de edad.',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msg: 'Usuarios con al menos x años de edad, obtenidos con éxito.'
        });
      }
    });
  },
  get_report_8: function(req, res)   {
    administrativem.get_report_8(req.con, req.query, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Empleados con mas o menos noticias publicadas, obtenidos con éxito.',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msg: 'Empleados con mas o menos noticias publicadas, obtenidos con éxito.'
        });
      }
    });
  },
  get_report_9: function(req, res)   {
    administrativem.get_report_9(req.con, req.query, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al obtener empleados con mas o menos noticias publicadas de x equipo.',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msg: 'Empleados con mas o menos noticias publicadas de x equipo, obtenidos con éxito.'
        });
      }
    });
  },
  get_report_10: function(req, res)   {
    administrativem.get_report_10(req.con, req.query, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al obtener bitácora de los administradores.',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msg: 'Bitácora de los administradores obtenida con éxito.'
        });
      }
    });
  },
  create_user: function(req, res)   {
    administrativem.create_user(req.con, req.body, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al crear usuario.',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msg: 'Usuario creado con éxito.'
        });
      }
    });
  },
  get_user: function(req, res)   {
    administrativem.get_user(req.con, req.query, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al obtener equipo(s).',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msg: 'Equipo(s) obtenido(s) con éxito..'
        });
      }
    });
  },
  update_user_status: function(req, res)   {
    administrativem.update_user_status(req.con, req.body, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al actualizar el estado del usuario.',
          error: err.toString()
        });
      } else {
        administrativem.bitacora(req.con, req.body, "Actualizacion estado del usuario",function(err, rows){
          if(err){
            res.status(200).send({
              status: true,
              data: [],
              msg: 'Usuario actualizado con exito, pero no se pudo crear la bitácora.',
              error: err.toString()
            });
          } else {
            res.status(200).send({
              status: true,
              data: rows,
              msg: 'Estado del usuario actualizado con éxito.'
            });
          }
        });
      }
    });
  },
  update_user: function(req, res)   {
    administrativem.update_user(req.con, req.body, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al actualizar el usuario.',
          error: err.toString()
        });
      } else {
        administrativem.bitacora(req.con, req.body,"Actualizacion datos usuario", function(err, rows){
          if(err){
            res.status(200).send({
              status: true,
              data: [],
              msg: 'Usuario actualizado con exito, pero no se pudo crear la bitácora.',
              error: err.toString()
            });
          } else {
            res.status(200).send({
              status: true,
              data: rows,
              msg: 'Usuario actualizado con éxito.'
            });
          }
        });
      }
    });
  }
}
