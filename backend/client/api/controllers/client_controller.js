const clientm = require('../models/client_model');
const { get_last_id, email_confirmation } = require('../models/client_model');
var cryptoJS = require('crypto-js');

module.exports = {

   // update: async function(req, res) {

    get: function(req, res) {
      clientm.get(req.con, req.query, function(err, rows) {
        if(err){
          res.status(400).send({
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
      })
    },

    all_countries: function(req, res) {
      clientm.all_countries(req.con, function(err, rows) {
        res.status(200).send(rows);
      })
    },

    delete: async function(req, res) {
      clientm.delete(req.con, req.body, async function(err){
        if(err){
          res.status(400).send({
            status: false,
            data: [],
            msg: 'Error al eliminar usuario',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msg: 'Usuario eliminado con exito'
          });
        }
      });
    },

    update: async function(req, res) {
      clientm.update(req.con, req.body, async function(err){
        if(err){
          res.status(400).send({
            status: false,
            msg: "Error al actualizar el usuario",
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            msg: "Usuario actualizado con exito"
          });
        }
      });
    },

    create: async function(req, res) {
      clientm.create(req.con, req.body, async function(err, rows){
        if(err){
          res.status(400).send({
            status: false,
            msg: 'Error al guardar usuario',
            data: [],
            error: err.toString()
          });
        } else {
          clientm.send_email({email: req.body.email, id: rows.insertId});
          res.status(200).send({
            status: true,
            data: [],
            msg: 'Usuario creado con exito'
          });
        }
      });  
    },

    email_confirmation: function(req, res)   {
      clientm.email_confirmation(req.con, req.query.id, function(err, rows){
        if(err){
          res.status(409).send(
            `
            <!--html-->
            <!doctype html>
            <html lang="en">
              <head>
                  <title>Soccer Stats SIUUU</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
                  <meta charset="utf-8" />
              </head>
              <body>
                <center>
                  <h1>¡No se ha podido confirmar su cuenta!</h1>
                  <br>
                  <h3>Puede que ya lo haya hecho.</h3>
                  <br>
                  <a type="button" class="btn btn-primary btn-lg" href="http://localhost:4200/login">Iniciar sesión</a>
                </center>
              </body>
            </html>
            <!--!html-->
                `
          );
        } else {
          res.status(200).send(
            `
            <!--html-->
            <!doctype html>
            <html lang="en">
              <head>
                <title>Soccer Stats SIUUU</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
                <meta charset="utf-8" />
              </head>
              <body>
                <center>
                  <h1>¡Se ha confirmado su cuenta!</h1>
                  <a type="button" class="btn btn-primary btn-lg" href="http://localhost:4200/login">Iniciar sesión</a>
                </center>
              </body>
            </html>
            <!--!html-->
                `
          );
        }
      });
    },

    send_email: async function(req, res) {
      clientm.get_id(req.con, req.body, async function(err, rows){
        // console.log(rows[0].id_usuario);
        if(err){
          res.status(409).send({
            status: false,
            msg: 'Error al enviar correo.',
            error: err.toString()
          });
        } else {
          if(rows.length > 0){
            clientm.send_email({email: req.body.email, id: rows[0].id_usuario});
            res.status(200).send({
              status: true,
              msg: 'Se envio el correo exitosamente'
            });
          } else {
            res.status(409).send({
              status: true,
              msg: 'Error al enviar correo, usuario no registrado.'
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
    }
  }