var cryptoJS = require('crypto-js');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

module.exports = {
// *************************************************
// ****************     ESTADIO     ****************
// *************************************************

// *****************************************************
// ****************     COMPETICION     ****************
// *****************************************************

// *****************************************************
// ****************     PARTIDO     ********************
// *****************************************************

// *************************************************
// ****************     EQUIPO     ****************
// *************************************************

// *************************************************
// ****************     PERSON     ****************
// *************************************************
  
    create_person: async function(con, data, callback) {
      const {name,lastname,birthday,nationality,id_stand,position,status,id_team,photo,rol} = data;
      let query = "";
      if(rol == 1){
        `
      insert into Jugador ( 
        nombre,
        apellido,
        fecha_nac,
        pais_nacionalidad,
        id_posicion,
        foto,
        id_estado
        )
      VALUES (
        '${name}',
        '${lastname}',
        '${birthday}',
        '${nationality}',
        '${position}',
        '${photo}',
        '${status}'
        );
      `
      }
      else{
        `
      insert into Tecnico ( 
        nombre,
        apellido,
        fecha_nac,
        id_pais,
        id_posicion,
        foto,
        id_estado
        )
      VALUES (
        '${name}',
        '${lastname}',
        '${birthday}',
        '${nationality}',
        '${position}',
        '${photo}',
        '${status}'
        );
      `
      }
      await con.query(
        query,
        callback
      )
    },
  
    get_person: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          select * from Equipo
          WHERE id_equipo = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT * FROM Equipo;
          `,
          callback)
      }
    },
  
    edit_person: async function(con, data, callback) {
      const {id,name, fundation_date, id_country, photo} = data;;
      await con.query(
        `
        UPDATE Equipo SET
          nombre = '${name}',
          fundation = '${fundation_date}',
          id_pais = '${id_country}',
          photo = '${photo}'
        WHERE id_equipo = ${id};
          ;
        `,
        callback)
    },
  
    delete_person: async function(con, data, callback) {
      await con.query(
        `
        DELETE FROM Equipo
        WHERE
          id_equipo = '${data}';
        `,
        callback
      )
    },          
    // *************************************************
    // ****************     NOTICIA     ****************
    // *************************************************
  
  }
  async function asignTeam(con, data) {
    const {id,name, fundation_date, id_country, photo} = data;;
    await con.query(
      `
      insert into Equipo SET
        nombre = '${name}',
        fundation = '${fundation_date}',
        id_pais = '${id_country}',
        photo = '${photo}'
      WHERE id_equipo = ${id};
        ;
      `,
      callback)
  }
