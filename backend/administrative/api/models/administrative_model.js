var cryptoJS = require('crypto-js');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

module.exports = {

    all_countries: async function(con, callback){
      await con.query("SELECT * FROM Pais;", callback)
    },

// *************************************************
// ****************     ESTADIO     ****************
// *************************************************

    create_stadium: async function(con, data, callback) {
      const {name, fundation_date, capacity, id_country, address, state, photo} = data;
      await con.query(
        `
        INSERT INTO Estadio ( 
          nombre,
          fecha_inaguracion,
          capacidad,
          direccion,
          foto,
          id_pais,
          estado
          )
        VALUES (
          '${name}',
          '${fundation_date}',
          '${capacity}',
          '${address}',
          '${photo}',
          '${id_country}',
          '${state}'
          );
        `,
        callback
      )
    },

    get_stadium: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT * FROM Estadio
          WHERE id_estadio = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT * FROM Estadio;
          `,
          callback)
      }
    },

    edit_stadium: async function(con, data, callback) {
      const {id, name, fundation_date, capacity, id_country, address, state, photo} = data;
      await con.query(
        `
        UPDATE Estadio SET
          nombre = '${name}',
          fecha_inaguracion = '${fundation_date}',
          capacidad = '${capacity}',
          direccion = '${address}',
          foto = '${photo}',
          id_pais = '${id_country}',
          estado = '${state}'
        WHERE id_estadio = ${id};
          ;
        `,
        callback)
    },

    delete_stadium: async function(con, data, callback) {
      await con.query(
        `
        DELETE FROM Estadio
        WHERE
          id_estadio = '${data}';
        `,
        callback
      )
    },

// *****************************************************
// ****************     COMPETICION     ****************
// *****************************************************

    get_competition: async function(con, data, callback) {
      const id = data.championship;
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

    create_competition: async function(con, data, callback) {
      const {name, type, year, champion_team, country} = data;
      var tipo_competencia = this.get_id_comp(type);
      await con.query(
        `
        INSERT INTO Competencia ( 
          nombre,
          id_tipo_competencia,
          anio,
          id_campeon,
          id_country
          )
        VALUES (
          '${name}',
          '${tipo_competencia}',
          '${year}',
          '${champion_team}',
          '${country}'
          );
        `,
        callback
      )
    },

    edit_competition: async function(con, data, callback) {
      const {id_competition, name, type, year, champion_team, country} = data;
      var tipo_competencia = this.get_id_comp(type);
      await con.query(
        `
        UPDATE Competencia SET
          nombre = '${name}',
          id_tipo_competencia = '${tipo_competencia}',
          anio = '${year}',
          id_campeon = '${champion_team}',
          id_country = '${country}'
        WHERE id_competencia = ${id_competition};
          ;
        `,
        callback)
    },

    delete_competition: async function(con, data, callback) {
      await con.query(
        `
        DELETE FROM Competencia
        WHERE
          id_competencia = '${data}';
        `,
        callback
      )
    },

    get_id_comp: function(type){
      if(type == "Liga"){
        return 1;
      } else if(type == "Eliminatoria"){
        return 2;
      } else if(type == "Copa"){
        return 3;
      } else if(type == "Super Copa"){
        return 4;
      } else if(type == "Cuadrangular"){
        return 5;
      } else if(type == "Triangular"){
        return 6;
      }
    },

// *****************************************************
// ****************     PARTIDO     ********************
// *****************************************************

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

    create_game: async function(con, data, callback) {
      const {game_date, attendees, result_local, result_visiting, state, id_stadium, id_team_local, id_team_visiting, id_competition} = data;
      var id_state = this.get_id_estado(state);
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

    edit_game: async function(con, data, callback) {
      const {id_game, game_date, attendees, result_local, result_visiting, state, id_stadium, id_team_local, id_team_visiting, id_competition} = data;
      var id_state = this.get_id_estado(state);
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
    
    // “unstarted”, “in-progress”, “completed” , “suspended”
    get_id_estado: function(type){
      if(type == "unstarted"){
        return 4;
      } else if(type == "in-progress"){
        return 5;
      } else if(type == "completed"){
        return 6;
      } else if(type == "suspended"){
        return 7;
      }
    }

  }