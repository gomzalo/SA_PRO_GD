const clientc = require('../controllers/client_controller');
var cryptoJS = require('crypto-js');


module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT * FROM Usuario
          WHERE id_usuario = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT * FROM Usuario;
          `,
          callback)
      }
    },
// ||||||||||||||||||||   REGISTRO   ||||||||||||||||||||
    create: async function(con, data, callback) {
      const {name, lastname, password, email, phone, photo, gender, birth_date, address, id_country} = data;
      /*
      Roles (campo id_rol):
        Administrador = 1
        Empleado = 2
        Cliente = 3
      Estados (campo id_status):
        Activa = 1
        Congelada = 2
        Eliminada = 3
      Genero (campo gender):
        F
        M
        U
      */
      let id_estado = 2;
      let id_rol = 3;
      let age = this.getAge(birth_date);
      // console.log(age);
      let membership = 0;
      let cif_pass = cryptoJS.AES.encrypt(password, 'SiSaleSA_').toString();
      await con.query(
        `
        INSERT INTO Usuario (
          first_name,
          last_name,
          pass,
          email,
          phone,
          photo,
          gender,
          fecha_nac,
          fecha_registro,
          direccion,
          id_pais,
          id_estado,
          id_rol,
          age,
          membership
          )
        VALUES (
          '${name}',
          '${lastname}',
          '${cif_pass}',
          '${email}',
          '${phone}',
          '${photo}',
          '${gender}',
          '${birth_date}',
          now(),
          '${address}',
          '${id_country}',
          '${id_estado}',
          '${id_rol}',
          '${age}',
          '${membership}'
          );
        `,
        callback
      )
    },
// ||||||||||||||||||||   ACTUALIZAR   ||||||||||||||||||||
    update: async function(con, data, callback){
      const {id, name, lastname, password, email, phone, photo, gender , birth_date, address, id_country} = data;
      let age = this.getAge(birth_date);
      let cif_pass = cryptoJS.AES.encrypt(password, 'SiSaleSA_').toString();
      console.log(data);
      await con.query(
        `
        UPDATE Usuario
        SET
        first_name = '${name}',
        last_name = '${lastname}',
        pass = '${cif_pass}',
        email = '${email}',
        phone = '${phone}',
        photo =  '${photo}',
        gender = '${gender}',
        fecha_nac = '${birth_date}',
        direccion = '${address}',
        id_pais = '${id_country}',
        age = '${age}'
        WHERE id_usuario = ${id};
        `,
        callback
      )
    },
// ||||||||||||||||||||   ELIMINAR   ||||||||||||||||||||
    delete: async function(con, data, callback){
      const id = data.id;
      await con.query(
        `
        UPDATE Usuario
        SET id_estado = 3
        WHERE id_usuario = '${id}';
        `,
        callback)
    },
// ||||||||||||||||||||   OBTENER ID   ||||||||||||||||||||
    get_id: async function(con, data, callback) {
      await con.query(
        `
        SELECT id_usuario FROM Usuario
        WHERE email = '${data.email}';
        `,
        callback)
    },
// ||||||||||||||||||||   VALIDAR CUENTA   ||||||||||||||||||||
    validar_cuenta: async function(con, data, callback) {
      // console.log("id: ", data);
      await con.query(
        `
        UPDATE Usuario
        SET
          id_estado = IF (id_estado != 1, 1, null)
        WHERE
          id_usuario = '${data}';
        `,
        callback
      )
    },
// ||||||||||||||||||||   COMPRAR MEMBRESIA   ||||||||||||||||||||
    buy_membership: async function(con, data, callback){
      const id = data.id_client;
      await con.query(
        `
        CALL Update_Membership(?,?);
        `,
        [id, 1],
        callback)
    },
// ||||||||||||||||||||   DAR DE BAJA MEMBRESIA   ||||||||||||||||||||
    cancel_membership: async function(con, data, callback){
      const id = data.id_client;
      await con.query(
        `
        CALL Update_Membership(?,?);
        `,
        [id, 0],
        callback)
    },
// ||||||||||||||||||||   SEGUIR EQUIPO   ||||||||||||||||||||
    follow_team: async function(con, data, callback){
      const { id_client, id_team } = data;
      await con.query(
        `
        INSERT INTO Usuario_Equipo (id_usuario, id_equipo)
        VALUES (${id_client}, ${id_team});
        `,
        callback)
    },
// ||||||||||||||||||||   EQUIPOS FAVORITOS   ||||||||||||||||||||
    favorite_teams: async function(con, data, callback){
      const { id_client } = data;
      await con.query(
        `
        SELECT e.id_equipo AS id, e.nombre AS name,
          e.foundation_date, e.photo,
          e.id_pais AS id_country, p.nicename AS country
          FROM Equipo e
          INNER JOIN Pais p ON p.id_pais = e.id_pais
          INNER JOIN Usuario_Equipo ue ON ue.id_equipo = e.id_equipo
            WHERE ue.id_usuario = ${id_client}
            GROUP BY ue.id_equipo;
        `,
        callback)
    },
// ||||||||||||||||||||   OBTENER EDAD   ||||||||||||||||||||
    getAge(dateString){
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  :::::::::::::::::::   REPORTES    :::::::::::::::::::
//  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // ********************       1. Jugadores o Técnico de X equipo      ******************
    /**
    * Query Params: ?id_team=number&player=boolean 
    * 
    * player es un booleano representado por los valores 0 y 1
    *  0: Jugadores
    *  1: Técnico
    * 
    */
    get_report_1: async function(con, data, callback) {
      const id = data.id_team;
      const player = data.player;
      let query = '';
      // 0 -> Jugador
      if(player == 0){
        query = `
          SELECT j.id_jugador AS id, j.nombre AS name, j.apellido AS lastname,
            pa.nicename AS nationality, j.foto AS photo, 
            p.nombre as position FROM Jugador j
            INNER JOIN Posicion p ON j.id_posicion = p.id_posicion
            INNER JOIN Pais pa ON j.pais_nacionalidad = pa.id_pais
            INNER JOIN Asignacion_Jugador_Equipo aje ON aje.id_jugador = j.id_jugador
              WHERE aje.id_equipo = ${id}
              GROUP BY j.id_jugador
          ;
        `
      }
      // 1 -> Tecnico
      else if(player == 1){
        query = `
          SELECT t.id_tecnico AS id, t.nombre AS name, t.apellido AS lastname,
            pa.nicename AS nationality, t.foto AS photo, 
            '' as position FROM Tecnico t
            INNER JOIN Pais pa ON t.id_pais = pa.id_pais
            INNER JOIN Asignacion_Tecnico_Equipo ate ON ate.id_tecnico = t.id_tecnico
              WHERE ate.id_equipo = ${id}
              GROUP BY t.id_tecnico
          ;
        `
      }
      await con.query(query, callback)
    },
  // ********************       2. Jugadores o Técnicos mayores de X años      ******************
    /**
     * Query Params: ?age=number&player=boolean
     * age es el numero de años a buscar sin incluir
     * player es un booleano representado por los valores 0 y 1
      * 0: Jugadores
      * 1: Técnico
     */
    get_report_2: async function(con, data, callback) {
      const age_to_compare = data.age;
      const player = data.player;
      let query = '';
      // 0 -> Jugador
      if(player == 0){
        query = `
          SELECT j.id_jugador AS id, j.nombre AS name, j.apellido AS lastname,
            pa.nicename AS nationality, j.foto AS photo, p.nombre as position,
            te.nombre as team, TIMESTAMPDIFF (YEAR, j.fecha_nac, CURDATE()) AS age
            FROM Jugador j
            INNER JOIN Posicion p ON j.id_posicion = p.id_posicion
            INNER JOIN Pais pa ON j.pais_nacionalidad = pa.id_pais
            INNER JOIN Asignacion_Jugador_Equipo aje ON aje.id_jugador = j.id_jugador
            INNER JOIN Equipo te ON te.id_equipo = aje.id_equipo
              WHERE TIMESTAMPDIFF (YEAR, j.fecha_nac, CURDATE()) > ${age_to_compare}
              GROUP BY j.id_jugador
          ;
        `
      }
      // 1 -> Tecnico
      else if(player == 1){
        query = `
          SELECT t.id_tecnico AS id, t.nombre AS name, t.apellido AS lastname,
            pa.nicename AS nationality, t.foto AS photo, '' as position,
            te.nombre as team, TIMESTAMPDIFF (YEAR, t.fecha_nac, CURDATE()) AS age
            FROM Tecnico t
            INNER JOIN Pais pa ON t.id_pais = pa.id_pais
            INNER JOIN Asignacion_Tecnico_Equipo ate ON ate.id_tecnico = t.id_tecnico
            INNER JOIN Equipo te ON te.id_equipo = ate.id_equipo
              WHERE TIMESTAMPDIFF (YEAR, t.fecha_nac, CURDATE()) > ${age_to_compare}
              GROUP BY t.id_tecnico
          ;
        `
      }
      await con.query(query, callback)
    },
  // ********************       3. Jugadores o Técnicos menores de X años      ******************
    /**
     * Query Params: ?age=number&player=boolean
     * age es el numero de años a buscar sin incluir
     * player es un booleano representado por los valores 0 y 1
      * 0: Jugadores
      * 1: Técnico
     */
    get_report_3: async function(con, data, callback) {
      const age_to_compare = data.age;
      const player = data.player;
      let query = '';
      // 0 -> Jugador
      if(player == 0){
        query = `
          SELECT j.id_jugador AS id, j.nombre AS name, j.apellido AS lastname,
            pa.nicename AS nationality, j.foto AS photo, p.nombre as position,
            te.nombre as team, TIMESTAMPDIFF (YEAR, j.fecha_nac, CURDATE()) AS age
            FROM Jugador j
            INNER JOIN Posicion p ON j.id_posicion = p.id_posicion
            INNER JOIN Pais pa ON j.pais_nacionalidad = pa.id_pais
            INNER JOIN Asignacion_Jugador_Equipo aje ON aje.id_jugador = j.id_jugador
            INNER JOIN Equipo te ON te.id_equipo = aje.id_equipo
              WHERE TIMESTAMPDIFF (YEAR, j.fecha_nac, CURDATE()) < ${age_to_compare}
              GROUP BY j.id_jugador
          ;
        `
      }
      // 1 -> Tecnico
      else if(player == 1){
        query = `
          SELECT t.id_tecnico AS id, t.nombre AS name, t.apellido AS lastname,
            pa.nicename AS nationality, t.foto AS photo, '' as position,
            te.nombre as team, TIMESTAMPDIFF (YEAR, t.fecha_nac, CURDATE()) AS age
            FROM Tecnico t
            INNER JOIN Pais pa ON t.id_pais = pa.id_pais
            INNER JOIN Asignacion_Tecnico_Equipo ate ON ate.id_tecnico = t.id_tecnico
            INNER JOIN Equipo te ON te.id_equipo = ate.id_equipo
              WHERE TIMESTAMPDIFF (YEAR, t.fecha_nac, CURDATE()) < ${age_to_compare}
              GROUP BY t.id_tecnico
          ;
        `
      }
      await con.query(query, callback)
    },
  // ********************       4. Equipos que participaron en X competición      ******************
    /**
     * Query Params: ?id_competition=number
     * Prefijo: /report/4/<<Query Params>>
    */
    get_report_4: async function(con, data, callback) {
      const id = data.id_competition;
      let query = `
        SELECT e.id_equipo AS id_team, e.nombre AS team, e.photo
          FROM Equipo e
          INNER JOIN Equipo_Competencia ec ON ec.id_equipo = e.id_equipo
            WHERE ec.id_competencia = ${id}
            GROUP BY e.id_equipo
        ;
      `;
      await con.query(query, callback)
    },
  // ********************       5. Equipos de X país      ******************
    /**
     * Query Params: ?id_country=number
    */
    get_report_5: async function(con, data, callback) {
      const id = data.id_country;
      let query = `
        SELECT e.id_equipo AS id_team, e.nombre AS team, e.photo,
          e.id_pais AS id_country
          FROM Equipo e
            WHERE e.id_pais = ${id}
            GROUP BY e.id_equipo
        ;
      `;
      await con.query(query, callback)
    },
  // ********************       6. Equipos con X años de antigüedad      ******************
    /**
     * Query Params: ?age=number
     * age es el numero de años exactos a buscar
    */
    get_report_6: async function(con, data, callback) {
      const age = data.age;
      let query = `
        SELECT e.id_equipo AS id_team, e.nombre AS team, e.photo,
          e.foundation_date, p.nicename AS country
          FROM Equipo e
          INNER JOIN Pais p ON e.id_pais = p.id_pais
            WHERE TIMESTAMPDIFF (YEAR, e.foundation_date, CURDATE()) = ${age}
            GROUP BY e.id_equipo
        ;
      `;
      await con.query(query, callback)
    },
  // ********************       7. Estadios en X país      ******************
    /**
     * Query Params: ?id_country=number
    */
    get_report_7: async function(con, data, callback) {
      const id = data.id_country;
      let query = `
        SELECT e.id_estadio AS id_stadium, e.nombre AS stadium, e.foto AS photo,
          e.id_pais AS id_country
          FROM Estadio e
            WHERE e.id_pais = ${id}
            GROUP BY e.id_estadio
        ;
      `;
      await con.query(query, callback)
    },
    // ********************       8. Estadios con capacidad menor o igual a X      ******************
    /**
     * Query Params: ?capacity=number
     * capacity es el numero de la capacidad a buscar (inclusive)
    */
    get_report_8: async function(con, data, callback) {
      const capacity = data.capacity;
      let query = `
        SELECT e.id_estadio AS id_stadium, e.nombre AS stadium, e.foto AS photo,
          p.nicename AS country, e.capacidad AS capacity
          FROM Estadio e
          INNER JOIN Pais p ON e.id_pais = p.id_pais
            WHERE e.capacidad >= ${capacity}
            GROUP BY e.id_estadio
        ;
      `;
      await con.query(query, callback)
    },
    // ********************       9. Histórico de partidos de X equipo      ******************
    /**
     * Query Params: ?id_team=number
    */
    get_report_9: async function(con, data, callback) {
      const id = data.id_team;
      let query = `
        SELECT p.id_partido AS id, p.fecha AS game_date, p.publico AS attendees,
        p.result_local, p.result_visiting AS result_visiting, p.id_estado AS status,
        p.id_estadio AS id_stadium, es.nombre AS stadium, p.id_local AS id_team_local,
        e.nombre AS team_local, e.photo AS photo_local, p.id_visitante AS id_team_visiting,
        e1.nombre AS team_visiting, e1.photo AS photo_visiting, p.id_competencia AS id_competition,
        c.nombre AS competition
        FROM Partido p
        INNER JOIN Estadio es ON es.id_estadio = p.id_estadio
        INNER JOIN Equipo e ON e.id_equipo = p.id_local
        INNER JOIN Equipo e1 ON e1.id_equipo = p.id_visitante
        INNER JOIN Competencia c ON c.id_competencia = p.id_competencia
            WHERE e.id_equipo = ${id}
        ;
      `;
      await con.query(query, callback)
    },
  }
