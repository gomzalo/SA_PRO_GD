const jwt = require('jsonwebtoken');

module.exports = {
  create_player: async function(con, data, callback) {
    const {name, lastname, birth_date, id_nationality,position,status,photo} = data;
    await con.query(
      `
      insert into Jugador ( 
        nombre,apellido,fecha_nac,pais_nacionalidad,id_posicion,foto,id_status,id_estado
        )
      VALUES (
        '${name}',
        '${lastname}',
        '${birth_date}',
        '${id_nationality}',
        '${position}',
        '${photo}',
        '${status}',
        1
        );
      `,
      callback
    )
  },

  get_player: async function(con, data, callback) {
    const id = data.id;
    if(id != null){
      await con.query(
        `
        select * from Jugador
        WHERE id_jugador = '${id}' and id_estado = 1;
        `,
        callback)
    } else {
      await con.query(
        `
        SELECT * FROM Jugador
        WHERE id_estado = 1;
        `,
        callback)
    }
  },

  edit_player: async function(con, data, callback) {
    const {id,name,lastname,birth_date,id_nationality,position,status,photo} = data;
    await con.query(
      `
        update Jugador set 
        nombre = '${name}',
        apellido = '${lastname}',
        fecha_nac = '${birth_date}',
        pais_nacionalidad = '${id_nationality}',
        id_posicion = '${position}',
        id_estado = '${status}',
        foto = '${photo}'
        where id_jugador = '${id}';
        ;
      `,
      callback)
  },

  delete_player: async function(con, data, callback) {
    await con.query(
      `
      update Jugador set
      id_estado = 3 where id_jugador = '${data}';
      `,
      callback
    )
  }
}