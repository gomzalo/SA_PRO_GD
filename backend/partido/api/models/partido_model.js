const matchc = require('../controllers/partido_controller');
module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get_game: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT * FROM Partido
          WHERE id_partido = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT * FROM Partido;
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
        INSERT INTO Partido ( 
          fecha,
          publico,
          result_local,
          result_visiting,
          id_estadio,
          id_visitante,
          id_local,
          id_competencia,
          id_estado
          )
        VALUES (
          '${game_date}',
          '${attendees}',
          '${result_local}',
          '${result_visiting}',
          '${id_stadium}',
          '${id_team_visiting}',
          '${id_team_local}',
          '${id_competition}',
          '${id_state}'
          );
        `,
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