const administrativem = require('../models/administrative_model');
var cryptoJS = require('crypto-js');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const { url } = require('../../config');

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
      // console.log(req.body);
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al crear usuario.',
          error: err.toString()
        });
      } else {
        let email_data = {
          email: req.body.email,
          id: rows.insertId,
          subject: 'Confirmación de registro',
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
                  Tu cuenta ha sido dada de alta, tus credenciales para iniciar sesión son:
                  <br>
                  <br>
                  <b>Email: </b> ${req.body.email}
                  <br>
                  <b>Password: </b> ${req.body.password}
                  <br>
                  <br>
                  <b>Nota: </b> ¡Por seguridad, no compartas estas credenciales con nadie!
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
            res.status(200).send({
              status: true,
              data: [],
              msg: 'Usuario creado con exito'
            });
          }
        });
        // res.status(200).send({
        //   status: true,
        //   data: rows,
        //   msg: 'Usuario creado con éxito.'
        // });
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