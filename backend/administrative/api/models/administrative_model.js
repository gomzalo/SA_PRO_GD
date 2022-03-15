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
    }
  }