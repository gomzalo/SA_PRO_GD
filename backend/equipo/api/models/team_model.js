const jwt = require('jsonwebtoken');

module.exports = {
  create_team: async function(con, data, callback) {
    const {name, foundation_date, id_country, photo} = data;
    const abr = name.substring(0, 3).toUpperCase();
    await con.query(
      `
      insert into Equipo ( 
        nombre,
        foundation_date,
        abreviado,
        photo,
        id_pais,
        is_club
        )
      VALUES (
        '${name}',
        '${foundation_date}',
        '${abr}',
        '${photo}',
        '${id_country}',
        1
        );
      `,
      callback
    )
  },

  get_team: async function(con, data, callback) {
    const id = data.id;
    if(id != null){
      await con.query(
        `
        select * from Equipo
        WHERE id_equipo = '${id}';
        `,
        callback)
    } else {
      await con.query(
        `
        SELECT * FROM Equipo;
        `,
        callback)
    }
  },

  edit_team: async function(con, data, callback) {
    const {id,name, foundation_date, id_country, photo} = data;;
    await con.query(
      `
      UPDATE Equipo SET
        nombre = '${name}',
        foundation_date = '${foundation_date}',
        id_pais = '${id_country}',
        photo = '${photo}'
      WHERE id_equipo = ${id};
        ;
      `,
      callback)
  },

  delete_team: async function(con, data, callback) {
    await con.query(
      `
      DELETE FROM Equipo
      WHERE
        id_equipo = '${data}';
      `,
      callback
    )
  }
}