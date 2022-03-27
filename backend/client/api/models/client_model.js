const clientc = require('../controllers/client_controller');
var cryptoJS = require('crypto-js');


module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
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
// ||||||||||||||||||||   REGISTRO   ||||||||||||||||||||
    create: async function(con, data, callback) {
      const {name, lastname, password, email, phone, photo, gender, birth_date, address, id_pais} = data;
      /*
      Roles (campo id_rol):
        Administrador = 1
        Empleado = 2
        Cliente = 3
      Estados (campo id_status):
        Activa = 1
        Congelada = 2
        Eliminada = 3
      Genero (campo gender):
        F
        M
        U
      */
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
// ||||||||||||||||||||   ACTUALIZAR   ||||||||||||||||||||
    update: async function(con, data, callback){
      const {id, name, lastname, password, email, phone, photo, gender , birth_date, address, id_country} = data;
      let age = this.getAge(birth_date);
      console.log(data);
      await con.query(
        `
        UPDATE Usuario
        SET
        first_name = '${name}',
        last_name = '${lastname}',
        pass = '${password}',
        email = '${email}',
        phone = '${phone}',
        photo =  '${photo}',
        gender = '${gender}',
        fecha_nac = '${birth_date}',
        direccion = '${address}',
        id_pais = '${id_country}',
        age = '${age}'
        WHERE id_usuario = ${id};
        `,
        callback
      )
    },
// ||||||||||||||||||||   ELIMINAR   ||||||||||||||||||||
    delete: async function(con, data, callback){
      const id = data.id;
      await con.query(
        `
        UPDATE Usuario
        SET id_estado = 3
        WHERE id_usuario = '${id}';
        `,
        callback)
    },
// ||||||||||||||||||||   OBTENER ID   ||||||||||||||||||||
    get_id: async function(con, data, callback) {
      await con.query(
        `
        SELECT id_usuario FROM Usuario
        WHERE email = '${data.email}';
        `,
        callback)
    },
// ||||||||||||||||||||   VALIDAR CUENTA   ||||||||||||||||||||
    validar_cuenta: async function(con, data, callback) {
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
// ||||||||||||||||||||   COMPRAR MEMBRESIA   ||||||||||||||||||||
    buy_membership: async function(con, data, callback){
      const id = data.id_client;
      await con.query(
        `
        UPDATE Usuario
        SET membership = 1
        WHERE id_usuario = '${id}';
        `,
        callback)
    },
// ||||||||||||||||||||   DAR DE BAJA MEMBRESIA   ||||||||||||||||||||
    cancel_membership: async function(con, data, callback){
      const id = data.id_client;
      await con.query(
        `
        UPDATE Usuario
        SET membership = 0
        WHERE id_usuario = '${id}';
        `,
        callback)
    },
// ||||||||||||||||||||   SEGUIR EQUIPO   ||||||||||||||||||||
    follow_team: async function(con, data, callback){
      const { id_client, id_team } = data;
      await con.query(
        `
        INSERT INTO Usuario_Equipo (id_usuario, id_equipo)
        VALUES (${id_client}, ${id_team});
        `,
        callback)
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
