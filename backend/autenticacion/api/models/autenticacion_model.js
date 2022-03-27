var cryptoJS = require('crypto-js');

module.exports = {

    login: async function(con, data, callback) {
      const { email } = data;
      await con.query(
        `
        SELECT * FROM Usuario
        WHERE email = '${email}';
        `,
        callback
      )
    },

    update_password: async function(con, data, callback) {
      const { id, password } = data;
      await con.query(
        `
        UPDATE Usuario
        SET
        pass = '${password}'
        WHERE id_usuario = '${id}';
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

    email_confirmation: async function(con, data, callback) {
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

    validar_cuenta: async function(con, data, callback) {
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