var cryptoJS = require('crypto-js');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

module.exports = {
    all: async function(con, callback) {
      await con.query(
        `
        SELECT * FROM Estadio;
        `,
        callback)
    },

    all_countries: async function(con, callback){
      await con.query("SELECT * FROM Pais;", callback)
    },

    create: async function(con, data, callback) {
      const {name, fundation, capacity, id_country, address, state, photo} = data;
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
          '${fundation}',
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

    get: async function(con, data, callback) {
      const id = data;
      if(id != null){
        await con.query(
          `
          SELECT * FROM Estadio
          WHERE id = '${id}';
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

    edit: async function(con, data, callback) {
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
          state = '${state}'
        WHERE id_estadio = ${id};
          ;
        `,
        callback)
    },

    delete: async function(con, data, callback) {
      await con.query(
        `
        DELETE FROM Estadio
        WHERE
          id_estadio = '${data}';
        `,
        callback
      )
    }
  }