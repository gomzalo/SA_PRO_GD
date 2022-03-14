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

    login: async function(req, res) {
      userm.login(req.con, req.body, async function(err, rows, fields){
        // console.log(rows);
        let datos = rows[0];
        let pass = req.body.password;
        let id_user_rol;
        if(!err){
          if(rows.length > 0){
            let pass_bytes = cryptoJS.AES.decrypt(datos.pass, 'SiSaleSA_');
            let uncif_pass = pass_bytes.toString(cryptoJS.enc.Utf8);
            if(uncif_pass == pass){
              if(datos.id_estado != 1){
                res.status(409).send({
                  status: false,
                  msj: 'Error al iniciar sesion, correo no confirmado.'
                });
              }
              id_user_rol = {id_usuario: datos.id_usuario, id_rol: datos.id_rol};
              const accessToken = userm.generateAccessToken(id_user_rol);
              res.status(200).send({
                data: datos,
                statusAccount: datos.id_estado.toString(),
                token: accessToken,
                status: true,
                msj: 'Logueado correctamente'
              });
            } else {
              res.status(409).send({
                status: false,
                msj: 'Error al iniciar sesion, contraseña incorrecta.'
              });
            }
          } else {
            res.status(409).send({
              status: false,
              msj: 'Error al iniciar sesion, usuario no encontrado'
            });
          }
        } else {
          res.status(409).send({
            status: false,
            msj: 'Error al iniciar sesion',
            error: err.toString()
          });
        }
      });  
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
          if(!userm.check_email(req.body.email)){
            res.status(409).send({
              status: true,
              msj: 'Correo invalido.'
            });
          }else{
            if(req.body.id_rol == 3){
              userm.send_email_confirmation({email: req.body.email, id: rows.insertId}, async (err, data) => {
                if(err){
                  res.status(409).send({
                    status: true,
                    msj: 'Error al enviar correo.'
                  });
                }else{
                  console.log("data: ", data);
                }
              });
            } else {
              userm.send_email_credentials({email: req.body.email, password: req.body.password});
            }
          }
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
      userm.get_id(req.con, req.body, async function(err, rows){
        // console.log(rows[0].id_usuario);
        if(err){
          res.status(409).send({
            status: false,
            msj: 'Error al enviar correo.',
            error: err.toString()
          });
        } else {
          if(rows.length > 0){
            userm.send_email_confirmation({email: req.body.email, id: rows[0].id_usuario}, async (err, data) => {
              if(err){
                res.status(409).send({
                  status: true,
                  msj: 'Error al enviar correo.'
                });
              }else{
                console.log(data);
              }
            });
            res.status(200).send({
              status: true,
              msj: 'Se envio el correo exitosamente'
            });
          } else {
            res.status(409).send({
              status: true,
              msj: 'Error al enviar correo, usuario no registrado.'
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