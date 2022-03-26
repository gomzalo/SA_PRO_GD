var cryptoJS = require('crypto-js');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
var emailCheck = require('email-check');

module.exports = {
    get: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT * FROM Usuario
          WHERE id_usuario = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT * FROM Usuario;
          `,
          callback)
      }
    },

    all_countries: async function(con, callback){
      await con.query("SELECT * FROM Pais;", callback)
    },


    delete: async function(con, data, callback){
      const id = data.id;
      await con.query(
        `
        update Usuario
        set id_estado = 3
        WHERE id_usuario = '${id}';
        `,
        callback)
    },

    update: async function(con, data, callback){
      const {id, name, lastname, password, email, telephone, photo, genre , birthday,address, id_country, age} = data;
      console.log(data);
      await con.query(
        `
        UPDATE Usuario
        SET
        first_name = '${name}',
        last_name = '${lastname}',
        pass = '${password}',
        email = '${email}',
        phone = '${telephone}',
        photo =  '${photo}',
        gender = '${genre}',
        fecha_nac = '${birthday}',
        direccion = '${address}',
        id_pais = '${id_country}',
        age = '${age}'
        WHERE id_usuario = ${id};
        `,
        callback
      )
    },

    create: async function(con, data, callback) {
      const {name, lastname, password, email, phone, photo, gender, birth_date, address, id_pais} = data;
      // let signup_date = Date.now().toString();
      let id_estado = 2;
      let id_rol = 3;
      let age = this.getAge(birth_date);
      // console.log(age);
      let membership = 0;
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
          now(),
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
    },

    authenticate_token: function(req, res, next){
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if(token == null) return res.sendStatus(401);

      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id_user_rol) => {
          if (err) return res.sendStatus(403);
          req.id_user_rol = id_user_rol;
          next();
      });
    },

    check_email: function(email){
      emailCheck(email)
      .then(function (res) {
        // Returns "true" if the email address exists, "false" if it doesn't.
        return true
      })
      .catch(function (err) {
        if (err.message === 'refuse') {
          // The MX server is refusing requests from your IP address.
          return false;
        } else {
          // Decide what to do with other errors.
          return false;
        }
      });
    },

    getAge: function(dateString) {
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