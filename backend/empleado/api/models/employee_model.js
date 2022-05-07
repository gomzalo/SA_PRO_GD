
module.exports = {
  player_transfer: async function(con, data, callback) {
    const {id_player,id_team_origin,id_team_destination,start_date,end_date} = data;
    await con.query(
      `
      call transfer_player(${id_player},${id_team_origin},${id_team_destination},${start_date},${end_date},"Transferencia de jugador");
      `,
      callback
    )
  },
  get_player_transfers: async function(con, data, callback) {
    const id = data.id;
    if(id != null){
    await con.query(
      `
      select t1.*, 
      t2.nombre as player_name, 
      t2.apellido as player_lastname,
      t3.nombre as team_origin,
      t4.nombre as team_destination
      from Bitacora_Jugador t1
      inner join Jugador t2 on t2.id_jugador = t1.id_jugador
      inner join Equipo t3 on t3.id_equipo = t1.id_team_origin
      inner join Equipo t4 on t4.id_equipo = t1.id_team_destination
      where t2.id_jugador = ${id};
      `,
      callback
    )
    } else {
      await con.query(
        `
        select t1.*, 
        t2.nombre as player_name, 
        t2.apellido as player_lastname,
        t3.nombre as team_origin,
        t4.nombre as team_destination
        from Bitacora_Jugador t1
        inner join Jugador t2 on t2.id_jugador = t1.id_jugador
        inner join Equipo t3 on t3.id_equipo = t1.id_team_origin
        inner join Equipo t4 on t4.id_equipo = t1.id_team_destination;
        `,
        callback
      )
    }
  },
  dt_transfer: async function(con, data, callback) {
    const {id_coach,id_team_origin,id_team_destination,start_date,end_date} = data;
    await con.query(
      `
      call transfer_tecnico(${id_coach},${id_team_origin},${id_team_destination},${start_date},${end_date},'Transferencia de tecnico');
      `,
      callback
    )
  },
  get_dt_transfers: async function(con, data, callback) {
    const id = data.id;
    if(id != null){
    await con.query(
      `
      select t1.*, 
      t2.nombre as coach_name, 
      t2.apellido as coach_lastname,
      t3.nombre as team_origin,
      t4.nombre as team_destination
      from Bitacora_Tecnico t1
      inner join Tecnico t2 on t2.id_tecnico = t1.id_coach
      inner join Equipo t3 on t3.id_equipo = t1.id_team_origin
      inner join Equipo t4 on t4.id_equipo = t1.id_team_destination
      where t2.id_jugador = ${id};

      `,
      callback
    )
    } else {
      await con.query(
        `
        select t1.*, 
        t2.nombre as coach_name, 
        t2.apellido as coach_lastname,
        t3.nombre as team_origin,
        t4.nombre as team_destination
        from Bitacora_Tecnico t1
        inner join Tecnico t2 on t2.id_tecnico = t1.id_coach
        inner join Equipo t3 on t3.id_equipo = t1.id_team_origin
        inner join Equipo t4 on t4.id_equipo = t1.id_team_destination;
        `,
        callback
      )
    }
  },
  incidencia: async function(con, data, callback) {
    const {id_player,id_game ,id_type ,description,minute} = data;
    await con.query(
      `
      insert into Incidencia (id_partido,minuto,id_jugador,id_tipo_incidencia,description)
      values(${id_game},${minute},${id_player},${id_type},${description});
      `,
      callback
    )
  }
}