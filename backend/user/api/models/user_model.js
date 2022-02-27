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
          )
        `,
        callback
      )
    },

    verifyEmail: async function(con, data, callback){
      const {id_usuario, email} = data;
      console.log("email: " + email + "\nid_usuario: " + id_usuario)
      await con.query(
        `
        SELECT COUNT(*) AS num FROM Usuario
        WHERE email = '${email}'
        AND id_usuario != '${id_usuario}';`
        ,
        callback
      )
    }
  }