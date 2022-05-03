const clientm = require('../models/client_model');
const nodemailer = require("nodemailer");
const { url } = require('../../config');

module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get: function(req, res) {
      clientm.get(req.con, req.query, function(err, rows) {
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: 'Error al obtener el usuario(s).',
            error: err.toString()
          });
        } else {
          let newRows = rows.map(item => {
            item.id_country = item.id_pais;
            delete item["id_pais"];
            return item;
          });
          res.status(200).send({
            status: 200,
            data: newRows,
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
            status: 400,
            msg: 'Error al guardar usuario',
            data: [],
            error: err.toString()
          });
        } else {
          let link = `${url}:4200/verify/${rows.insertId}`;
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
                status: 400,
                msg: 'Error al enviar correo.',
                err: err.toString(),
                data: []
              });
            }else{
              // res.status(200).send({
              //   status: 200,
              //   msg: 'Correo verificado con exito.',
              //   data: []
              // });
              res.status(200).send({
                status: 200,
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
            status: 400,
            msg: "Error al actualizar el usuario",
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
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
            status: 400,
            data: [],
            msg: 'Error al eliminar usuario',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
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
            status: 400,
            data: [],
            msg: 'Error al comprar membresia.',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
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
            status: 400,
            data: [],
            msg: 'Error al cancelar membresia.',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
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
            status: 400,
            data: [],
            msg: 'Error al agregar equipo a favoritos.',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: [],
            msg: 'Equipo agregado a favoritos con éxito.'
          });
        }
      });
    },
// ||||||||||||||||||||   SEGUIR EQUIPO   ||||||||||||||||||||
    favorite_teams: async function(req, res) {
      clientm.favorite_teams(req.con, req.query, async function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: 'Error al obtener los equipos favoritos.',
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: 'Equipos favoritos obtenidos con éxito.'
          });
        }
      });
    },
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  :::::::::::::::::::   REPORTES    :::::::::::::::::::
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ********************       1. Jugadores o Técnico de X equipo      ******************
    get_report_1: function(req, res)   {
      clientm.get_report_1(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los jugadores o técnico del equipo.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Jugadores o técnico del equipo obtenidos con éxito.`
          });
        }
      });
    },
// ********************       2. Jugadores o Técnicos mayores de X años      ******************
    get_report_2: function(req, res)   {
      clientm.get_report_2(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los jugadores o técnicos mayores a ${req.query.age} años.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Jugadores o técnicos mayores a ${req.query.age} años obtenidos con éxito.`
          });
        }
      });
    },
// ********************       3. Jugadores o Técnicos menores a X años      ******************
    get_report_3: function(req, res)   {
      clientm.get_report_3(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los jugadores o técnicos menores a ${req.query.age} años.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Jugadores o técnicos menores a ${req.query.age} años obtenidos con éxito.`
          });
        }
      });
    },
// ********************       4. Equipos que participaron en X competición      ******************
    get_report_4: function(req, res)   {
      clientm.get_report_4(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los equipos que participaron en una competición.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Equipos que participaron en una competición obtenidos con éxito.`
          });
        }
      });
    },
// ********************       5. Equipos de X pais      ******************
    get_report_5: function(req, res)   {
      clientm.get_report_5(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los equipos de un pais.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Equipos de un país obtenidos con éxito.`
          });
        }
      });
    },
// ********************      6. Equipos con X años de antigüedad      ******************
    get_report_6: function(req, res)   {
      clientm.get_report_6(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los equipos con ${req.query.age} años de antigüedad.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Equipos con ${req.query.age} años de antigüedad obtenidos con éxito..`
          });
        }
      });
    },
// ********************      7. Estadios en X país      ******************
    get_report_7: function(req, res)   {
      clientm.get_report_7(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los estadios de un país.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Estadios de un país obtenidos con éxito.`
          });
        }
      });
    },
// ********************      8. Estadios con capacidad menor o igual a X      ******************
    get_report_8: function(req, res)   {
      clientm.get_report_8(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los estadios con capacidad menor o igual a x.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Estadios con capacidad menor o igual a x obtenidos con éxito.`
          });
        }
      });
    },
// ********************      9. Histórico de partidos de X equipo      ******************
    get_report_9: function(req, res)   {
      clientm.get_report_9(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener el histórico de partidos del equipo ${req.query.id_team}.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Histórico de partidos del equipo ${req.query.id_team} obtenidos con éxito.`
          });
        }
      });
    },
    // *******  10. Equipos en los que ha estado o dirigido X técnico o jugador. ******************
    get_report_10: function(req, res)   {
      clientm.get_report_10(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Equipos en los que ha estado o dirigido ${req.query.id} técnico o jugador.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Equipos en los que ha estado o dirigido ${req.query.id} obtenidos con éxito`
          });
        }
      });
    },
     // ********************   11. Partidos donde hubo al menos X goles  ******************
     get_report_11: function(req, res)   {
      clientm.get_report_11(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los partidos donde hubo ${re.query.goals} cantidad de goles.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Error al obtener los partidos donde hubo ${re.query.goals} cantidad de goles.`
          });
        }
      });
    },
     // ********************      12. Jugadores con más X incidencias en Y competición      ******************
     get_report_12: function(req, res)   {
      clientm.get_report_12(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los jugadores con x incidencias en ${req.query.id_competition} competición.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Jugadores con x incidencias en y competición obtenidos con éxito.`
          });
        }
      });
    },
     // *********   13. Jugadores con más X incidencias y Y competiciones de Z año  **************
     get_report_13: function(req, res)   {
      clientm.get_report_13(req.con, req.query,req.body, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener los jugadores con x incidencias en y competiciones de z año.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Jugadores con x incidencias en y competiciones de z año obtenidos con éxito.`
          });
        }
      });
    },
     // ************  14. Cantidad de X competiciones que ha ganado Y equipo  ***************
     get_report_14: function(req, res)   {
      clientm.get_report_14(req.con, req.query,req.body, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener las competiciones que ha ganado x equipo.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Competencias que ha ganado x equipo obtenidas con éxito.`
          });
        }
      });
    },
     // ********************      15. Listado de partidos en X año      ******************
     get_report_15: function(req, res)   {
      clientm.get_report_15(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener el listado de partidos de un año especifico.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Listado de partidos de un año especifico obtenidos con éxito.`
          });
        }
      });
    },
     // *************    16. Listado de partidos entre X equipo contra Y equipo     **************
     get_report_16: function(req, res)   {
      clientm.get_report_16(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener el listado de partidos entre x equipo y y equipo.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Listado de partidos entre x equipo y y equipo obtenidos con éxito.`
          });
        }
      });
    },
     // ********************      17 Listado de partidos de X equipo      ******************
     get_report_17: function(req, res)   {
      clientm.get_report_17(req.con, req.query, function(err, rows){
        if(err){
          res.status(400).send({
            status: 400,
            data: [],
            msg: `Error al obtener el listado de partidos del equipo x.`,
            error: err.toString()
          });
        } else {
          res.status(200).send({
            status: 200,
            data: rows,
            msg: `Listado de partidos del equipo x obtenidos con éxito.`
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
