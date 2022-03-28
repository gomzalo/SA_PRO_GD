
const jwt = require('jsonwebtoken');

module.exports = {
  get_report_6: async function(con, data, callback) {
    const gender = data.gender;
      await con.query(
        `
        Select * from Usuario where gender = '${gender}' and id_rol = 3;
        `,
        callback)
  },
  
  get_report_7: async function(con, data, callback) {
    const gender = data.gender;
      await con.query(
        `
        Select * from Usuario where gender = '${gender}' and id_rol = 3;
        `,
        callback)
  },
  get_report_6: async function(con, data, callback) {
    const gender = data.gender;
      await con.query(
        `
        Select * from Usuario where gender = '${gender}' and id_rol = 3;
        `,
        callback)
  },
  get_report_7: async function(con, data, callback) {
    const age = data.age;
      await con.query(
        `
        Select * from Usuario where age >= ${age} and id_rol = 3;
        `,
        callback)
  },
  get_report_8: async function(con, data, callback) {
    const order  = (data.order == 1) ? 'asc' : 'desc';
      await con.query(
        `
        Select t1.id_usuario as id, t1.first_name as name, t1.last_name as lastname, 
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
        Select t1.id_usuario as id, t1.first_name as name, t1.last_name as lastname, 
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
        Select * from Bitacora;
        `,
        callback)
  },
  create_user: async function(con, data, callback) {
    const {name, lastname, password, email, phone, photo,gender,birth_date,address,id_country,id_rol}= data;
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
      VALUES ('
      ${name}', 
      '${lastname}', 
      '${password}', 
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
      const {id,id_status,description}= data;

      await con.query(
        `
        update Usuario set
        id_estado = ${id_status}
        where id_usuario = ${id};
        `,
        callback
        )
      
    },
    update_user: async function(con, data, callback) {
      const {id,name,lastname,password,email,phone,photo,gender,birth_date,address,id_country,description}= data;
      const age = getAge(birth_date)
      let query =  `
      update Usuario set
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
      if(password.length >1){query+= `, pass = '${password}'`}
      if(photo.length >1){query+= `, photo = '${photo}'`}
      query+= ` where id_usuario = ${id};`
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
          select 
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
          from Usuario t1 inner join Pais t2 on t1.id_pais = t2.id_pais
          where t1.id_usuario = ${id}
          `,
          callback)
      } else {
        await con.query(
          `
          select 
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
          from Usuario t1 inner join Pais t2 on t1.id_pais = t2.id_pais
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