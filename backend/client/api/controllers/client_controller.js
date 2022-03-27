const clientm = require('../models/client_model');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const { url } = require('../../config');

module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get: function(req, res) {
      clientm.get(req.con, req.query, function(err, rows) {
        if(err){
          res.status(400).send({
            status: false,
            data: [],
            msg: 'Error al obtener el usuario(s).',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: rows,
            msg: 'Usuario(s) obtenido(s) con exito.'
          });
        }
      })
    },
// ||||||||||||||||||||   REGISTRO   ||||||||||||||||||||
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
          let link = `http://${url}:4200/confirmar-correo`;
            let email_data = {
              email: req.body.email,
              id: rows.insertId,
              subject: 'Confirmación de correo electrónico',
              content: `
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
                      <h1><b>¡Bienvenido a Soccer Stats!</b></h1>
                      <br>
                      Para confirmar su registro, haga click en el siguiente enlace:
                      <br>
                      <h2><a type="button" class="btn btn-primary btn-lg" href="${link}">Confirmar registro</a></h2>
                      <br>
                      Si el botón de arriba no funciona, copia y pega el siguiente enlace en tu navegador:
                      <br>
                      <br>
                      ${link}
                      <br>
                      <br>
                      Si usted no se registro en Soccer Stats, puede ignorar este mensaje.
                      <br>
                      <b>Nota: </b> ¡No podra iniciar sesión hasta confirmar su registro!
                  </body>
                </html>
              <!--!html-->
              `
            };
            // Enviar correo
            send_email(email_data, async (err, data) => {
              if(err){
                res.status(400).send({
                  status: true,
                  msg: 'Error al enviar correo.',
                  err: err.toString(),
                  data: []
                });
              }else{
                // res.status(200).send({
                //   status: true,
                //   msg: 'Correo verificado con exito.',
                //   data: []
                // });
                res.status(200).send({
                  status: true,
                  data: [],
                  msg: 'Usuario creado con exito'
                });
              }
            });
        }
      });  
    },
// ||||||||||||||||||||   ACTUALIZAR   ||||||||||||||||||||
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
// ||||||||||||||||||||   ELIMINAR   ||||||||||||||||||||
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
// ||||||||||||||||||||   COMPRAR MEMBRESIA   ||||||||||||||||||||
    buy_membership: async function(req, res) {
      clientm.buy_membership(req.con, req.body, async function(err){
        if(err){
          res.status(400).send({
            status: false,
            data: [],
            msg: 'Error al comprar membresia.',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msg: 'Membresia comprada con exito.'
          });
        }
      });
    },
// ||||||||||||||||||||   DAR DE BAJA MEMBRESIA   ||||||||||||||||||||
    cancel_membership: async function(req, res) {
      clientm.cancel_membership(req.con, req.body, async function(err){
        if(err){
          res.status(400).send({
            status: false,
            data: [],
            msg: 'Error al cancelar membresia.',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msg: 'Membresia cancelada con exito.'
          });
        }
      });
    },
// ||||||||||||||||||||   SEGUIR EQUIPO   ||||||||||||||||||||
    follow_team: async function(req, res) {
      clientm.follow_team(req.con, req.body, async function(err){
        if(err){
          res.status(400).send({
            status: false,
            data: [],
            msg: 'Error al agregar equipo a favoritos.',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msg: 'Equipo agregado a favoritos con éxito.'
          });
        }
      });
    },
// ........................................................................
// ||||||||||||||||||||   VALIDAR CORREO   ||||||||||||||||||||
    validar_email(correo) {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(correo)) {
        return true;
      }
      return false;
    },
// ||||||||||||||||||||   VALIDAR PASSWORD   ||||||||||||||||||||
    validar_pass(pass, conf){
      if(pass == conf) {
        if(pass.length >= 8) {
            return true;
          }
      }  
      return false;
    },
// ||||||||||||||||||||   OBTENER EDAD   ||||||||||||||||||||
    getAge(dateString){
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
//---------------------------------------------------
// ---------------  Otras funciones   ---------------
//---------------------------------------------------
// ||||||||||||||||||||   ENVIAR CORREO   ||||||||||||||||||||
  async function send_email(datos, callback) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
          type: "OAuth",
          user: 'pweb.g16@gmail.com' , // email you are using with nodemailer
          pass: 'gnchlbutqguzbdyh', // email password 'ENLASnubes'
          clientId: '186197231924-s2nvbq03jgaror4mvtrqhvpdakgv8r6m.apps.googleusercontent.com',
          clientSecrect:'p10IojeHKOfBDsBeRybMjpwd',
          refreshToken: '1//04hTgndkMZcVGCgYIARAAGAQSNwF-L9IrYMeRCk5A7Dq69R82j5COXaAZv85q2ZbcZG1gNWhEoaRRh-Jz8UCsl4TS7dleFLT2D68',
          accessToken: 'ya29.a0AfH6SMBVEg9A29cbaiH-KafFOyNk48PnZ5FDYRz3g4I6gl-7uTvWajfl-yAv_jug7RH3y2a85RdZGPapbBq9T7RHcyyL6BK1_x2wU5Y7mLukqZCXk2hNvE9p0LjfkNMApOPn4vLVKrygPpDcmjCRVbfJHjyK-uVUhX0',
      },
      tls:{
        rejectUnauthorized:false
      }
    });
    const info = await transporter.sendMail(
      {
      from:'Soccer Stats <pweb.g16@gmail.com>',
      to: datos.email,
      subject: datos.subject,
      html: datos.content
    },
    callback
    );
    console.log("Email sent: %s", info);
    // return result ;
  }
// ||||||||||||||||||||   AUTENTICAR TOKEN   ||||||||||||||||||||
  function authenticate_token(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
        if (err) return res.sendStatus(403);
        req.id_user_rol = id_user_rol;
        next();
    });
  }