var cryptoJS = require('crypto-js');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

module.exports = {
    all: async function(con, callback) {
      await con.query("SELECT * FROM Usuario;", callback)
    },

    all_countries: async function(con, callback){
      await con.query("SELECT * FROM Pais;", callback)
    },

    login: async function(con, data, callback) {
      const {password, email} = data;
      await con.query(
        `
        SELECT * FROM Usuario
        WHERE email = '${email}';
        `,
        callback
      )
    },

    generateAccessToken: function(id_user_rol){
      return jwt.sign(id_user_rol, process.env.ACCESS_TOKEN_SECRET);
    },

    add: async function(con, data, callback) {
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
          '${data.name}',
          '${data.lastname}',
          '${cif_pass}',
          '${data.email}',
          '${data.phone}',
          '${data.photo}',
          '${data.gender}',
          '${data.birth_date}',
          '${data.signup_date}',
          '${data.address}',
          '${data.id_pais}',
          '${data.id_estado}',
          '${data.id_rol}',
          '${data.age}',
          '${data.membership}'
          );
        `,
        callback
      )
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
      let url = 'http://0.0.0.0:5003/user/email_confirmation?id='+datos.id.toString();
      const info=await transporter.sendMail({        
        from:'Soccer Stats <pweb.g16@gmail.com>',
        to: datos.email,
        subject: 'Confirmación de correo electrónico',
        html: "<b>¡Bienvenido a Soccer Stats!</b><br>Para confirmar tu registro, haz click en el siguiente enlace:<br>"+url+"<br>Si usted no se registro, puede ignorar este mensaje.<br>De lo contrario, no podra iniciar sesión hasta confirmar su registro."
      });
      console.log("Email sent: %s", info.messageId);
      return "success";
    },

    email_confirmation: async function(con, data, callback) {
      console.log("id: ", data);
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