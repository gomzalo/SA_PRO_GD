
module.exports = {
  get_prediccion: async function(con, data, callback) {
    const {id_home, id_away} = data;
    await con.query(
      `
        SELECT p.id_local AS homeTeam, p.id_visitante AS awayTeam,
        p.result_local AS homeGoals, p.result_visiting AS awayGoals
        FROM Partido p
        WHERE (p.id_local = ${id_home} OR p.id_local = ${id_away})
        AND (p.id_visitante = ${id_away} OR p.id_visitante = ${id_home})
        ;
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
  }
}