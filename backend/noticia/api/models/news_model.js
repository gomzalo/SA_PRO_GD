const jwt = require('jsonwebtoken');

module.exports = {
  create_noticia: async function(con, data, callback) {
    const {id_team, id_user,title,description,date} = data;
    await con.query(
      `
      insert into Noticia ( 
        id_equipo,
        titulo,
        descripcion,
        fecha,
        id_user
        )
      VALUES (
        '${id_team}',
        '${title}',
        '${description}',
        '${date}',
        '${id_user}'
        );
      `,
      callback
    )
  },

  get_noticia: async function(con, data, callback) {
    const id = data.id;
    const team = data.team;
    if(id != null){
      await con.query(
        `
        select * from Noticia
        WHERE id_noticia = '${id}';
        `,
        callback)
    }
    else if(team != null){
      await con.query(
        `
        select * from Noticia
        WHERE id_equipo = '${team}';
        `,
        callback)
    } else {
      await con.query(
        `
        SELECT * FROM Noticia;
        `,
        callback)
    }
  }
}