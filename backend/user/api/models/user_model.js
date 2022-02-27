var cryptoJS = require('crypto-js');

module.exports = {
    all: async function(con, callback) {
      await con.query("SELECT * FROM Usuario;", callback)
      // console.log(con.query("SELECT * FROM usuario;", callback))
    },

    add: async function(con, data, callback) {
      const {name, lastname, password, email, phone, photo, gender, birth_date, signup_date, address, id_pais, id_estado, id_rol, age, membership} = data;
      console.log("data: ", data);
      let cif_pass = cryptoJS.AES.encrypt(password, 'SiSaleSA_');
      console.log("cif_pass: ", cif_pass);
      
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
          rol
          )
        VALUES (
          '${data.name}',
          '${data.lastname}',
          '${cif_pass}',
          '${data.email}',
          '${data.phone}',
          '${data.photo}',
          '${data.photo}',
          '${data.photo}',
          '${data.photo}',
          '${data.photo}',
          )
        `,
        callback
      )
    },

    verifyCorreo: async function(con, data, callback){
      const {nickname, correo, id} = data;
      console.log("nickname: " + nickname + "\ncorreo: " + correo + "\nid: " + id)
      let cif_correo = await encrypt_cryptojs_1.encrypt_cryptojs.encrypt(correo, nickname)
      await con.query(
        `SELECT COUNT(*) AS num FROM usuario
        WHERE correo = '${cif_correo}'
        AND id != '${id}';`,
        callback
      )
    }
  }