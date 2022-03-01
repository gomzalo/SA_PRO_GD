const userm = require('../models/user_model');
const { get_last_id, email_confirmation } = require('../models/user_model');
var cryptoJS = require('crypto-js');

module.exports = {
    all: function(req, res) {
      userm.all(req.con, function(err, rows) {
        res.status(200).send(rows);
      })
    },

    all_countries: function(req, res) {
      userm.all_countries(req.con, function(err, rows) {
        res.status(200).send(rows);
      })
    },

    add: async function(req, res) {
      userm.add(req.con, req.body, async function(err, rows){
        if(err){
          res.status(409).send({
            status: false,
            msj: 'Error al crear usuario',
            error: err.toString()
          });
        } else {
          userm.send_email({email: req.body.email, id: rows.insertId});
          res.status(200).send({
            status: true,
            msj: 'Usuario creado con exito'
          });
        }
      });  
    },
    
    login: async function(req, res) {
      userm.login(req.con, req.body, async function(err, rows, fields){
        // console.log(rows);
        let datos = rows[0];
        let pass = req.body.password;
        let id_user_rol = {id_usuario: datos.id_usuario, id_rol: datos.id_rol};
        const accessToken = userm.generateAccessToken(id_user_rol);
        if(!err){
          if(rows.length > 0){
            let pass_bytes = cryptoJS.AES.decrypt(datos.pass, 'SiSaleSA_');
            let uncif_pass = pass_bytes.toString(cryptoJS.enc.Utf8);
            if(uncif_pass == pass){
              res.status(200).send({
                data: datos,
                statusAccount: datos.id_estado.toString(),
                token: accessToken,
                msj: 'Logueado correctamente'
              });
            } else {
              res.status(409).send({
                msj: 'Error al iniciar sesion, contraseña incorrecta.'
              });
            }
          } else {
            res.status(409).send({
              msj: 'Error al iniciar sesion'
            });
          }
        } else {
          res.status(409).send({
            msj: 'Error al iniciar sesion',
            error: err.toString()
          });
        }
      });  
    },

    email_confirmation: function(req, res)   {
      userm.email_confirmation(req.con, req.query.id, function(err, rows){
        if(err){
          res.status(409).send(
            `
            <!doctype html>
            <html lang="en">
              <head>
                  <title>Soccer Stats SIUUU</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <link rel="stylesheet" href="https://bootswatch.com/5/vapor/bootstrap.css">
                  <meta charset="utf-8" />
              </head>
              <body>
                <center>
                  <h1>¡No se ha podido confirmar su cuenta!</h1>
                  Puede que ya lo hayas hecho.
                  <a href="http://0.0.0.0:4200/login">Iniciar sesión</a>
                </center>
              </body>
            </html>
                `
          );
        } else {
          res.status(200).send(
            `
            <!doctype html>
            <html lang="en">
              <head>
                <title>Soccer Stats SIUUU</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://bootswatch.com/5/vapor/bootstrap.css">
                <meta charset="utf-8" />
              </head>
              <body>
                <center>
                  <h1>¡Se ha confirmado su cuenta!</h1>
                  <a href="http://0.0.0.0:4200/login">Iniciar sesión</a>
                </center>
              </body>
            </html>
                `
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