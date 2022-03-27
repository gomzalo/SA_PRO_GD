const compc = require('../controllers/competition_controller');
module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get_competition: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT * FROM Competencia
          WHERE id_competencia = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT * FROM Competencia;
          `,
          callback)
      }
    },
// ||||||||||||||||||||   CREAR   ||||||||||||||||||||
    create_competition: async function(con, data, callback) {
      const {name, type, year, id_country} = data;
      await con.query(
        `
        INSERT INTO Competencia ( 
          nombre,
          id_tipo_competencia,
          anio,
          id_country
          )
        VALUES (
          '${name}',
          '${type}',
          '${year}',
          '${id_country}'
          );
        `,
        callback
      )
    },
// ||||||||||||||||||||   EDITAR   ||||||||||||||||||||
    edit_competition: async function(con, data, callback) {
      const {id, name, type, year, id_champion_team, id_country} = data;
      await con.query(
        `
        UPDATE Competencia SET
          nombre = '${name}',
          id_tipo_competencia = '${type}',
          anio = '${year}',
          id_campeon = '${id_champion_team}',
          id_country = '${id_country}'
        WHERE id_competencia = ${id};
          ;
        `,
        callback)
    },
// ||||||||||||||||||||   ELIMINAR   ||||||||||||||||||||
    delete_competition: async function(con, data, callback) {
      await con.query(
        `
        DELETE FROM Competencia
        WHERE
          id_competencia = '${data}';
        `,
        callback
      )
    }
  }