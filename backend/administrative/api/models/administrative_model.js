var cryptoJS = require('crypto-js');

module.exports = {
  // ::::::::::::::::::::   REPORTES    ::::::::::::::::::::
  // ***************    1. Usuarios Suscritos a X equipo   ***************
  get_report_1: async function(con, data, callback) {
    const id = data.id_team;
      await con.query(
        `
        SELECT u.id_usuario AS id, u.first_name AS name, u.last_name AS lastname,
          p.nicename AS nationality, u.photo AS photo FROM Usuario u
          INNER JOIN Pais p ON u.id_pais = p.id_pais
          INNER JOIN Usuario_Equipo ue ON ue.id_usuario = u.id_usuario
            WHERE ue.id_equipo = ${id}
            GROUP BY u.id_usuario
        ;
        `,
        callback)
  },
  // ***************    2. Usuario Con o Sin Membresía   ***************
  /*
    0: No posee membresía
    1: Posee membresía
  **/
  get_report_2: async function(con, data, callback) {
    const membership = data.membership;
      await con.query(
        `
        SELECT u.id_usuario AS id, u.first_name AS name, u.last_name AS lastname,
        p.nicename AS nationality, u.photo AS photo FROM Usuario u
          INNER JOIN Pais p ON u.id_pais = p.id_pais
          WHERE membership = '${membership}';
        `,
        callback)
  },
  // ***************    3. Usuarios que Mas membresías han adquirido   ***************
  get_report_3: async function(con, data, callback) {
      await con.query(
        `
        SELECT u.id_usuario AS id, u.first_name AS name, u.last_name AS lastname,
          p.nicename AS nationality, u.photo AS photo, count(*) as count FROM Usuario u
          INNER JOIN Pais p ON u.id_pais = p.id_pais
          INNER JOIN Usuario_Membresia um ON um.id_usuario = u.id_usuario
            WHERE um.estado = 1
            GROUP BY u.id_usuario
            ORDER BY count ASC
            LIMIT 10
        ;
        `,
        callback)
  },
  // ***************    4. Usuarios que mas dinero han gastado   ***************
  get_report_4: async function(con, data, callback) {
      await con.query(
        `
        SELECT u.id_usuario AS id, u.first_name AS name, u.last_name AS lastname,
          p.nicename AS nationality, u.photo AS photo, count(*)*15 as amount FROM Usuario u
          INNER JOIN Pais p ON u.id_pais = p.id_pais
          INNER JOIN Usuario_Membresia um ON um.id_usuario = u.id_usuario
            WHERE um.estado = 1
            GROUP BY u.id_usuario
            ORDER BY amount ASC
            LIMIT 10
        ;
        `,
        callback)
  },
  // ***************    5. Usuarios de X País   ***************
  get_report_5: async function(con, data, callback) {
    const id = data.id_country;
      await con.query(
        `
        SELECT u.id_usuario AS id, u.first_name AS name, u.last_name AS lastname, u.photo AS photo
        FROM Usuario u
          WHERE u.id_pais = ${id}
        ;
        `,
        callback)
  },
  // ***************    6. Usuarios que Mas membresías han adquirido   ***************
  get_report_6: async function(con, data, callback) {
    const gender = data.gender;
      await con.query(
        `
        SELECT * from Usuario where gender = '${gender}' and id_rol = 3;
        `,
        callback)
  },
  get_report_7: async function(con, data, callback) {
    const age = data.age;
      await con.query(
        `
        SELECT * from Usuario where age >= ${age} and id_rol = 3;
        `,
        callback)
  },
  get_report_8: async function(con, data, callback) {
    const order  = (data.order == 1) ? 'asc' : 'desc';
      await con.query(
        `
        SELECT t1.id_usuario as id, t1.first_name as name, t1.last_name as lastname, 
        t3.name as nationality,t1.photo, count(*) as count from Usuario t1
        inner join Noticia t2 on t1.id_usuario = t2.id_user
        inner join Pais t3 on t1.id_pais = t3.id_pais
        where id_rol < 3
        group by id_usuario
        order by count ${order}
        limit 5;
        `,
        callback)
  },
  get_report_9: async function(con, data, callback) {
    const order  = (data.order == 1) ? 'asc' : 'desc';
    const id = data.id_team;
      await con.query(
        `
        SELECT t1.id_usuario as id, t1.first_name as name, t1.last_name as lastname, 
        t3.name as nationality,t1.photo, count(*) as count from Usuario t1
        inner join Noticia t2 on t1.id_usuario = t2.id_user
        inner join Pais t3 on t1.id_pais = t3.id_pais
        where id_rol < 3 and t2.id_equipo = ${id}
        group by id_usuario
        order by count ${order}
        limit 5;
        `,
        callback)
  },
  get_report_10: async function(con, data, callback) {
      await con.query(
        `
        SELECT * from Bitacora;
        `,
        callback)
  },
  // ::::::::::::::::::::   CRUD USUARIOS    ::::::::::::::::::::
  create_user: async function(con, data, callback) {
    const {name, lastname, password, email, phone, photo,gender,birth_date,address,id_country,id_rol}= data;
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
    let cif_pass = cryptoJS.AES.encrypt(password, 'SiSaleSA_').toString();
    const age = getAge(birth_date)
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
      1,
      '${id_rol}',
      ${age},
      0
      );
      `,
      callback
    );
    },
    update_user_status: async function(con, data, callback) {
      const {id, id_status, description}= data;

      await con.query(
        `
        UPDATE Usuario set
        id_estado = ${id_status}
        WHERE id_usuario = ${id};
        `,
        callback
        )
      
    },
    update_user: async function(con, data, callback) {
      const {id,name,lastname,password,email,phone,photo,gender,birth_date,address,id_country,description}= data;
      let cif_pass = cryptoJS.AES.encrypt(password, 'SiSaleSA_').toString();
      const age = getAge(birth_date);
      let query =  `
      UPDATE Usuario set
        first_name = '${name}',
        last_name = '${lastname}',
        email = '${email}',
        phone = '${phone}',
        gender = '${gender}', 
        fecha_nac  = '${birth_date}',
        direccion = '${address}',
        id_pais = '${id_country}',
        age = ${age}
      `
      if(password.length > 1){query += `, pass = '${cif_pass}'`}
      if(photo.length > 1){query += `, photo = '${photo}'`}
      query += ` WHERE id_usuario = ${id};`
      await con.query(
        query,
        callback
      )
    },
    bitacora: async function(con, data, tipo,callback) {
      const {description}= data;
      await con.query(
        `
        INSERT INTO Bitacora (
          tipo, 
          fecha, 
          descripcion
        )
        VALUES ('${tipo}',now(),'${description}');
        `,
        callback
      )
    },
    get_user: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT
          t1.id_usuario as id,
          t1.first_name as name,
          t1.last_name as lastname,
          t1.email,phone,photo,gender,
          t1.fecha_nac as birth_date,
          t1.direccion as address,
          t1.age, id_rol,
          t1.id_estado as id_status,
          t1.id_pais as id_country,
          t2.name as country
          FROM Usuario t1 inner join Pais t2 on t1.id_pais = t2.id_pais
          where t1.id_usuario = ${id}
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT
          t1.id_usuario as id,
          t1.first_name as name,
          t1.last_name as lastname,
          t1.email,phone,photo,gender,
          t1.fecha_nac as birth_date,
          t1.direccion as address,
          t1.age, id_rol,
          t1.id_estado as id_status,
          t1.id_pais as id_country,
          t2.name as country
          FROM Usuario t1 inner join Pais t2 on t1.id_pais = t2.id_pais
          `,
          callback)
      }
    },
}
// funtion thats recive birthdate and returns age
  function getAge(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }