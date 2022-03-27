const jwt = require('jsonwebtoken');

module.exports = {
  create_dt: async function(con, data, callback) {
    const {name, lastname, birth_date, id_country,status,photo} = data;
    await con.query(
      `
      insert into Tecnico (
        nombre,apellido,fecha_nac,id_status,foto,id_pais,id_estado
        )
      VALUES (
        '${name}',
        '${lastname}',
        '${birth_date}',
        '${status}',
        '${photo}',
        '${id_country}',
        1
       );
      `,
      callback
    )
  },

  get_dt: async function(con, data, callback) {
    const id = data.id;
    if(id != null){
      await con.query(
        `
        select * from Tecnico
        WHERE id_tecnico = '${id}' and id_estado = 1;
        `,
        callback)
    } else {
      await con.query(
        `
        SELECT * FROM Tecnico
        WHERE id_estado = 1;
        `,
        callback)
    }
  },

  edit_dt: async function(con, data, callback) {
    const {id,name,lastname,birth_date,id_country,status,photo} = data;
    await con.query(
      `
      update Tecnico set
      nombre = '${name}',
      apellido ='${lastname}',
      fecha_nac ='${birth_date}',
      id_status = '${status}',
      foto = '${photo}',
      id_pais = '${id_country}'
      where id_tecnico = '${id}';
        ;
      `,
      callback)
  },

  delete_dt: async function(con, data, callback) {
    await con.query(
      `
      update Tecnico set
      id_estado = 3 where id_tecnico = '${data}';
      `,
      callback
    )
  }
}