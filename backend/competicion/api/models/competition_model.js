module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get_competition: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT c.id_competencia AS id, c.nombre AS name,
          c.id_tipo_competencia AS type, c.anio AS year,
          c.id_campeon AS id_champion_team, e.nombre AS champion_team,
          c.id_country AS id_country, p.nicename AS country
          FROM Competencia c
          INNER JOIN Equipo e ON c.id_campeon = e.id_equipo
          INNER JOIN Pais p ON c.id_country = p.id_pais
          WHERE id_competencia = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT c.id_competencia AS id, c.nombre AS name,
          c.id_tipo_competencia AS type, c.anio AS year,
          c.id_campeon AS id_champion_team, e.nombre AS champion_team,
          c.id_country AS id_country, p.nicename AS country
          FROM Competencia c
          INNER JOIN Equipo e ON c.id_campeon = e.id_equipo
          INNER JOIN Pais p ON c.id_country = p.id_pais;
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