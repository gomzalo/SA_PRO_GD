module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get_game: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT p.id_partido AS id, p.fecha AS game_date, p.publico AS attendees, p.result_local,
          p.result_visiting, p.id_estado-10 AS status, p.id_estadio AS id_stadium, es.nombre AS stadium,
          p.id_local AS id_team_local, el.nombre AS team_local, p.id_visitante AS id_team_visiting,
          ev.nombre AS team_visiting, p.id_competencia AS id_competition, c.nombre AS competition
          FROM Partido p
          INNER JOIN Estadio es ON p.id_estadio = es.id_estadio
          INNER JOIN Equipo el ON p.id_local = el.id_equipo
          INNER JOIN Equipo ev ON p.id_visitante = ev.id_equipo
          INNER JOIN Competencia c ON p.id_competencia = c.id_competencia
          WHERE p.id_partido = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT p.id_partido AS id, p.fecha AS game_date, p.publico AS attendees, p.result_local,
          p.result_visiting, p.id_estado-10 AS status, p.id_estadio AS id_stadium, es.nombre AS stadium,
          p.id_local AS id_team_local, el.nombre AS team_local, p.id_visitante AS id_team_visiting,
          ev.nombre AS team_visiting, p.id_competencia AS id_competition, c.nombre AS competition
          FROM Partido p
          INNER JOIN Estadio es ON p.id_estadio = es.id_estadio
          INNER JOIN Equipo el ON p.id_local = el.id_equipo
          INNER JOIN Equipo ev ON p.id_visitante = ev.id_equipo
          INNER JOIN Competencia c ON p.id_competencia = c.id_competencia;
          `,
          callback)
      }
    },
// ||||||||||||||||||||   CREAR   ||||||||||||||||||||
    create_game: async function(con, data, callback) {
      const {game_date, attendees, result_local, result_visiting, status, id_stadium, id_team_local, id_team_visiting, id_competition} = data;
      var id_state = status + 10;
      await con.query(
        `
        CALL Insert_Partido_Proc(?,?,?,?,?,?,?,?,?)
        `,
        [game_date, attendees, result_local, result_visiting, id_stadium, id_team_visiting, id_team_local, id_competition, id_state]
        ,
        callback
      )
    },
// ||||||||||||||||||||   EDITAR   ||||||||||||||||||||
    edit_game: async function(con, data, callback) {
      const {id_game, game_date, attendees, result_local, result_visiting, status, id_stadium, id_team_local, id_team_visiting, id_competition} = data;
      var id_state = status + 10;
      await con.query(
        `
        UPDATE Partido SET
          fecha = '${game_date}',
          publico = '${attendees}',
          result_local = '${result_local}',
          result_visiting = '${result_visiting}',
          id_estadio = '${id_stadium}',
          id_visitante = '${id_team_visiting}',
          id_local = '${id_team_local}',
          id_competencia = '${id_competition}',
          id_estado = '${id_state}'
        WHERE id_partido = ${id_game};
          ;
        `,
        callback)
    },
// ||||||||||||||||||||   ELIMINAR   ||||||||||||||||||||
    delete_game: async function(con, data, callback) {
      await con.query(
        `
        DELETE FROM Partido
        WHERE
          id_partido = '${data}';
        `,
        callback
      )
    },
  }