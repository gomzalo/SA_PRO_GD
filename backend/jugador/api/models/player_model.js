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
        select
        t1.id_jugador as id,
        t1.nombre as name,
        t1.apellido as lastname,
        t1.fecha_nac as birth_date,
        t1.pais_nacionalidad as id_nationality,
        t2.name as nationality,
        t1.id_posicion as position,
        t1.id_status as status,
        t3.id_equipo as id_team,
        t4.nombre as name_team,
        t1.foto as photo
        from Asignacion_Jugador_Equipo t3
        right join Jugador t1 on t1.id_jugador = t3.id_jugador
        inner join Pais t2 on t1.pais_nacionalidad = t2.id_pais
        left join Equipo t4 on t4.id_equipo = t3.id_equipo 
        where t1.id_estado = 1 and isnull(t3.fecha_fin) and t1.id_jugador = ${id};
        `,
        callback)
    } else {
      await con.query(
        ` 
        select
        t1.id_jugador as id,
        t1.nombre as name,
        t1.apellido as lastname,
        t1.fecha_nac as birth_date,
        t1.pais_nacionalidad as id_nationality,
        t2.name as nationality,
        t1.id_posicion as position,
        t1.id_status as status,
        t3.id_equipo as id_team,
        t4.nombre as name_team,
        t1.foto as photo
        from Asignacion_Jugador_Equipo t3
        right join Jugador t1 on t1.id_jugador = t3.id_jugador
        inner join Pais t2 on t1.pais_nacionalidad = t2.id_pais
        left join Equipo t4 on t4.id_equipo = t3.id_equipo 
        where t1.id_estado = 1 and isnull(t3.fecha_fin) 
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