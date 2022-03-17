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
          state
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

    create_league: async function(con, data, callback) {
      const {name, description, type, id_country} = data;
      await con.query(
        `
        INSERT INTO Liga ( 
          name,
          description,
          type,
          id_country
          )
        VALUES (
          '${name}',
          '${description}',
          '${type}',
          '${id_country}'
          );
        `,
        callback
      )
    },


  // *************************************************
  // ****************     EQUIPO     ****************
  // *************************************************

  create_team: async function(con, data, callback) {
    const {name, fundation_date, id_country, photo} = data;
    await con.query(
      `
      insert into Equipo ( 
        nombre,
        fundation,
        photo,
        id_pais,
        is_club
        )
      VALUES (
        '${name}',
        '${fundation_date}',
        '${photo}',
        '${id_country}',
        1
        );
      `,
      callback
    )
  },

  get_team: async function(con, data, callback) {
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

  edit_team: async function(con, data, callback) {
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

  delete_team: async function(con, data, callback) {
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
  // ****************     EQUIPO     ****************
  // *************************************************

  create_noticia: async function(con, data, callback) {
    const {id_team, id_user,title,description,date} = data;
    await con.query(
      `
      insert into Noticia ( 
        id_equipo,
        titulo,
        descripcion,
        fecha,
        id_user
        )
      VALUES (
        '${id_team}',
        '${title}',
        '${description}',
        '${date}',
        '${id_user}'
        );
      `,
      callback
    )
  },

  get_noticia: async function(con, data, callback) {
    const id = data.id;
    const team = data.team;
    if(id != null){
      await con.query(
        `
        select * from Noticia
        WHERE id_noticia = '${id}';
        `,
        callback)
    }
    else if(team != null){
      await con.query(
        `
        select * from Noticia
        WHERE id_equipo = '${team}';
        `,
        callback)
    } else {
      await con.query(
        `
        SELECT * FROM Noticia;
        `,
        callback)
    }
  }  
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