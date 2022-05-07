const authm = require('../models/autenticacion_model');
var cryptoJS = require('crypto-js');
var generator = require('generate-password');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const { url } = require('../../config');

module.exports = {
// ||||||||||||||||||||   LOGIN   ||||||||||||||||||||
    login: async function(req, res) {
      authm.login(req.con, req.body, async function(err, rows){
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
                res.status(400).send({
                  status: 400,
                  msg: 'Error de autenticacion, correo no confirmado.'
                });
              }
              id_user_rol = {id_usuario: datos.id_usuario, id_rol: datos.id_rol};
              const accessToken = generateAccessToken(id_user_rol);
              res.status(200).send({
                data:{
                  token: accessToken,
                  id_status: datos.id_estado,
                  id_rol: datos.id_rol,
                  id_user: datos.id_usuario,
                  has_membership: datos.membership
                },
                status: 200,
                msg: 'Logueado correctamente'
              });
            } else {
              res.status(400).send({
                status: 400,
                msg: 'Error de autenticacion, contraseña incorrecta.'
              });
            }
          } else {
            res.status(400).send({
              status: 400,
              msg: 'Error de autenticacion, usuario no encontrado'
            });
          }
        } else {
          res.status(400).send({
            status: 400,
            msg: 'Error al autenticacion',
            error: err.toString()
          });
        }
      });  
    },
// ||||||||||||||||||||   VALIDAR CUENTA   ||||||||||||||||||||
    validar_cuenta: function(req, res) {
      authm.validar_cuenta(req.con, req.query.id, function(err, rows){
        console.log(rows);
        if(err){
          res.status(400).send({
            status: 400,
            msg: "Error al verificar correo.",
            data: []
          });
        } else {
          if(rows.changedRows != 0){
            res.status(200).send({
              status: 200,
              msg: "Correo verificado con éxito.",
              data: []
            });
          } else {
            res.status(400).send({
              status: 400,
              msg: "Error al verificar correo.",
              data: []
            });
          }
        }
      });
    },
// ||||||||||||||||||||   RESETEAR PASSWORD   ||||||||||||||||||||
    reset_password: function(req, res) {
      res.send(
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
                <h1><b>¡Confirmación de reseteo de contraseña!</b></h1>
                Ingresa tu contraseña temporal: 
                <label for="femail">Correo</label><br>
                <input type="text" id="femail" name="femail" placeholder="Email"><br>
                <label for="ftemp_pass">Contraseña temporal</label><br>
                <input type="text" id="ftemp_pass" name="ftemp_pass" placeholder="Temp pass"><br>
                <label for="fnew_pass">Last name:</label><br>
                <input type="text" id="fnew_pass" name="fnew_pass" placeholder="New pass"><br><br>
                <h2><a type="button" class="btn btn-primary btn-lg" onclick=resetpass()">Restablecer contraseña</a></h2>
                <br>
                <b>Nota: </b> ¡Si no restableces tu contraseña por una nueva, en los siguientes 2 minutos no podras iniciar sesión!
            </body>
            <!-- SCRIPTS -->
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <script>
              function resetpass(){
                var temp_pass = document.getElementById("ftemp_pass").value;
                var new_pass = document.getElementById("fnew_pass").value;
                var email = document.getElementById("femail").value;
                axios.post('http://35.188.184.126:5010/reset-password', {
                  temporal_password: temp_pass,
                  new_password: new_pass,
                  email: email
                })
                .then(function (response) {
                    console.log(response);
                    location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
              }
            </script>
          </html>
        <!--!html-->
        `
      );
    },
// ||||||||||||||||||||   PASS TEMPORAL   ||||||||||||||||||||
    temp_pass: async function(req, res) {
      authm.get_id(req.con, req.body, async function(err, rows){
        // console.log(rows[0].id_usuario);
        if(err){
          res.status(400).send({
            status: 400,
            msg: 'Error al enviar contraseña temporal.',
            error: err.toString(),
            data: []
          });
        } else {
          if(rows.length > 0){
            var user_id = rows[0].id_usuario;
            var temp_password = generator.generate({
              length: 10,
              numbers: true
            });
            let link = `http://35.188.184.126:5010/auth/resetpass/`;
            let email_data = {
              email: req.body.email,
              id: user_id,
              subject: 'Contraseña temporal',
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
                      <h1><b>¡Contraseña temporal, Soccer Stats!</b></h1>
                      Tu contraseña temporal es: 
                      <h3><b>${temp_password}</b></h3>
                      <br>
                      Para restablecer tu contraseña ingresa al siguiente enlace:
                      <br>
                      <h2><a type="button" class="btn btn-primary btn-lg" href="${link}">Restablecer contraseña</a></h2>
                      <br>
                      Si el botón de arriba no funciona, copia y pega el siguiente enlace en tu navegador:
                      <br>
                      <br>
                      ${link}
                      <br>
                      <br>
                      <b>Nota: </b> ¡Si no restableces tu contraseña por una nueva, en los siguientes 2 minutos no podras iniciar sesión!
                  </body>
                </html>
              <!--!html-->
              `
            };
            // Enviar correo
            send_email(email_data, async (err, data) => {
              if(err){
                res.status(400).send({
                  status: 400,
                  msg: 'Error al enviar la contraseña temporal.',
                  data: []
                });
              }else{
                console.log(data);
                let cif_pass = cryptoJS.AES.encrypt(temp_password, 'SiSaleSA_').toString();
                let pass_data = {
                  id: user_id,
                  password: cif_pass
                }
                authm.update_password(req.con, pass_data, async function(err, rows){
                  if(err){
                    res.status(400).send({
                      status: 400,
                      msg: "Error al actualizar contraseña temporal",
                      error: err.toString(),
                      data: []
                    });
                  } else {
                    res.status(200).send({
                      status: 200,
                      msg: 'Se ha enviado un correo para restablecer la contraseña.',
                      data: []
                    });
                  }
                });
              }
            });
          } else {
            res.status(400).send({
              status: 200,
              msg: 'Error al enviar la contraseña temporal, correo no encontrado.',
              data: []
            });
          }
        }
      });
    },
// ||||||||||||||||||||   RESETEAR PASS   ||||||||||||||||||||
    reset_pass: async function(req, res) {
      authm.login(req.con, req.body, async function(err, rows){
        let datos = rows[0];
        let pass = req.body.temporal_password;
        let id_user_rol;
        if(!err){
          if(rows.length > 0){
            let pass_bytes = cryptoJS.AES.decrypt(datos.pass, 'SiSaleSA_');
            let uncif_pass = pass_bytes.toString(cryptoJS.enc.Utf8);
            if(uncif_pass == pass){
              if(datos.id_estado != 1){
                res.status(400).send({
                  status: 400,
                  msg: 'Error de autenticacion, correo no confirmado.'
                });
              }
              id_user_rol = {id_usuario: datos.id_usuario, id_rol: datos.id_rol};
              const accessToken = generateAccessToken(id_user_rol);
              authm.verify_temp_pass(req.con, datos.id_usuario, async function(err, rows_verify){
                if(err){
                  res.status(400).send({
                    status: 400,
                    msg: "Error al restablecer contraseña, verificacion password.",
                    error: err.toString(),
                    data: []
                  });
                } else {
                  if(rows_verify.length > 0){
                    let datos_ver = rows_verify[0];
                    let fecha_antigua = new Date(datos_ver.hora);
                    let hora = fecha_antigua.getMinutes();
                    let now_min = new Date().getMinutes();
                    console.log(hora);
                    console.log(now_min);
                    console.log(dif);
                    let dif = hora - now_min;
                    if(dif >= 2){
                      let pass_data = {
                        id: datos.id_usuario,
                        password: datos_ver.original_pass
                      }
                      authm.update_pass(req.con, pass_data, async function(err, rows){
                        if(err){
                          res.status(400).send({
                            status: 400,
                            msg: "Error al restablecer contraseña antigua.",
                            error: err.toString(),
                            data: []
                          });
                        } else {
                          res.status(400).send({
                            datos: datos,
                            data:[],
                            status: 400,
                            msg: 'Se ha restablecido la contraseña antigua, pasaron los 2 minutos'
                          });
                        }
                      });
                    }else{
                      let cif_pass_on_time = cryptoJS.AES.encrypt(req.body.new_password, 'SiSaleSA_').toString();
                      let pass_data = {
                        id: datos.id_usuario,
                        password: cif_pass_on_time
                      }
                      authm.update_pass(req.con, pass_data, async function(err, rows){
                        if(err){
                          res.status(400).send({
                            status: 400,
                            msg: "Error al restablecer contraseña nueva",
                            error: err.toString(),
                            data: []
                          });
                        } else {
                          res.status(200).send({
                            datos: datos,
                            data:{
                              token: accessToken,
                              id_status: datos.id_estado,
                              id_rol: datos.id_rol,
                              id_user: datos.id_usuario,
                              has_membership: datos.membership
                            },
                            status: 200,
                            msg: 'Se ha restablecido la contraseña nueva.'
                          });
                        }
                      });
                    }
                    
                  } else {
                    res.status(400).send({
                      status: 400,
                      msg: 'Error de autenticacion, usuario no encontrado'
                    });
                  }
                }
              });
            } else {
              res.status(400).send({
                status: 400,
                msg: 'Error de autenticacion, contraseña incorrecta.'
              });
            }
          } else {
            res.status(400).send({
              status: 400,
              msg: 'Error de autenticacion, usuario no encontrado'
            });
          }
        } else {
          res.status(400).send({
            status: 400,
            msg: 'Error de autenticacion',
            error: err.toString()
          });
        }
      });  
    },
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
    }
  }
//---------------------------------------------------
// ---------------  OTHER   -------------------------
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
// ||||||||||||||||||||   GENERAR TOKEN   ||||||||||||||||||||
  function generateAccessToken(id_user_rol){
    return jwt.sign(id_user_rol, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1d'});
  }
