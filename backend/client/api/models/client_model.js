var cryptoJS = require('crypto-js');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

module.exports = {
    all: async function(con, callback) {
      await con.query(
        `
        SELECT * FROM Usuario
        WHERE id_rol = 3;
        `,
        callback)
    },

    all_countries: async function(con, callback){
      await con.query("SELECT * FROM Pais;", callback)
    },

    create: async function(con, data, callback) {
      const {name, lastname, password, email, phone, photo, gender, birth_date, signup_date, address, id_pais, id_estado, id_rol, age, membership} = data;
      let cif_pass = cryptoJS.AES.encrypt(password, 'SiSaleSA_').toString();
      await con.query(
        `
        INSERT INTO Usuario (
          first_name,
          last_name,
          pass,
          email,
          phone,
          photo,
          gender,
          fecha_nac,
          fecha_registro,
          direccion,
          id_pais,
          id_estado,
          id_rol,
          age,
          membership
          )
        VALUES (
          '${name}',
          '${lastname}',
          '${cif_pass}',
          '${email}',
          '${phone}',
          '${photo}',
          '${gender}',
          '${birth_date}',
          '${signup_date}',
          '${address}',
          '${id_pais}',
          '${id_estado}',
          '${id_rol}',
          '${age}',
          '${membership}'
          );
        `,
        callback
      )
    },

    get_id: async function(con, data, callback) {
      await con.query(
        `
        SELECT id_usuario FROM Usuario
        WHERE email = '${data.email}';
        `,
        callback)
    },

    send_email: async function(datos) {
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
      let url = 'http://0.0.0.0:5000/client/email_confirmation?id='+datos.id.toString();
      const info = await transporter.sendMail({        
        from:'Soccer Stats <pweb.g16@gmail.com>',
        to: datos.email,
        subject: 'Confirmación de correo electrónico',
        html: `
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
                <h2><a type="button" class="btn btn-primary btn-lg" href="${url}">Confirmar registro</a></h2>
                <br>
                Si el botón de arriba no funciona, copia y pega el siguiente enlace en tu navegador:
                <br>
                <br>
                ${url}
                <br>
                <br>
                Si usted no se registro en Soccer Stats, puede ignorar este mensaje.
                <br>
                <b>Nota: </b> ¡No podra iniciar sesión hasta confirmar su registro!
            </body>
          </html>
        <!--!html-->
        `
      });
      console.log("Email sent: %s", info.messageId);
      return "success";
    },

    email_confirmation: async function(con, data, callback) {
      // console.log("id: ", data);
      await con.query(
        `
        UPDATE Usuario
        SET
          id_estado = IF (id_estado != 1, 1, null)
        WHERE
          id_usuario = '${data}';
        `,
        callback
      )
    }
  }