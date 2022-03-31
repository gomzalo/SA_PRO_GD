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
        select
        t1.id_noticia as id,
        t1.id_equipo as id_team,
        t2.nombre as team,
        t1.id_user,
        t1.titulo as title,
        t1.descripcion as description,
        t1.fecha as date from Noticia t1
        inner join Equipo t2 on t2.id_equipo = t1.id_equipo
        WHERE t1.id_noticia = '${id}';
        `,
        callback)
    }
    else if(team != null){
      await con.query(
        `
        select
        t1.id_noticia as id,
        t1.id_equipo as id_team,
        t2.nombre as team,
        t1.id_user,
        t1.titulo as title,
        t1.descripcion as description,
        t1.fecha as date from Noticia t1
        inner join Equipo t2 on t2.id_equipo = t1.id_equipo
        WHERE t1.id_equipo = '${team}';
        `,
        callback)
    } else {
      await con.query(
        `
        select
        t1.id_noticia as id,
        t1.id_equipo as id_team,
        t2.nombre as team,
        t1.id_user,
        t1.titulo as title,
        t1.descripcion as description,
        t1.fecha as date from Noticia t1
        inner join Equipo t2 on t2.id_equipo = t1.id_equipo;
        `,
        callback)
    }
  }
}