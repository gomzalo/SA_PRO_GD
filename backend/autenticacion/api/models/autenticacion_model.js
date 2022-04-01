module.exports = {
// ||||||||||||||||||||   LOGIN   ||||||||||||||||||||
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
    // ||||||||||||||||||||   ACTUALIZAR CONTRASEÑA  ||||||||||||||||||||
    update_pass: async function(con, data, callback) {
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
    // ||||||||||||||||||||   ACTUALIZAR CONTRASEÑA PROC  ||||||||||||||||||||
    update_password: async function(con, data, callback) {
      const { id, password } = data;
      let original_pass = 'aad'
      await con.query(
        `
        -- UPDATE Usuario
        -- SET
        -- pass = '${password}'
        -- WHERE id_usuario = '${id}';
        -- SET @temp_pass := '${password}';
        -- SET @original_pass := '';
        -- SET @id := ${id};
        CALL Set_Temp_Pass(?,?,@output);
        `,
        [password, id, original_pass],
        callback
      )
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
// ||||||||||||||||||||   RESETEAR CONTRASEÑA   ||||||||||||||||||||
    verify_temp_pass: async function(con, data, callback) {
      await con.query(
        `
        SELECT * FROM Temp_Pass
        WHERE id_usuario = '${data}';
        `,
        callback
      )
    }
  }