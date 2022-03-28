const jwt = require('jsonwebtoken');

module.exports = {
  create_dt: async function(con, data, callback) {
    const {name, lastname, birth_date, id_country,status,photo} = data;
    await con.query(
      `
      insert into Tecnico (
        nombre,apellido,fecha_nac,id_status,foto,id_pais,id_estado
        )
      VALUES (
        '${name}',
        '${lastname}',
        '${birth_date}',
        '${status}',
        '${photo}',
        '${id_country}',
        1
       );
      `,
      callback
    )
  },

  get_dt: async function(con, data, callback) {
    const id = data.id;
    if(id != null){
      await con.query(
        `
        select
        t1.id_tecnico as id,
        t1.nombre as name,
        t1.apellido as lastname,
        t1.fecha_nac as birth_date,
        t1.id_pais as id_country,
        t2.name as country,
        t1.id_status as status,
        t3.id_equipo as id_team,
        t4.nombre as name_team,
        t1.foto as photo
        from Asignacion_Tecnico_Equipo t3
        right join Tecnico t1 on t1.id_tecnico= t3.id_tecnico
        inner join Pais t2 on t1.id_pais = t2.id_pais
        left join Equipo t4 on t4.id_equipo = t3.id_equipo 
        where t1.id_estado = 1 and isnull(t3.fecha_fin) and t1.id_tecnico = ${id};
        `,
        callback)
    } else {
      await con.query(
        `
        select
        t1.id_tecnico as id,
        t1.nombre as name,
        t1.apellido as lastname,
        t1.fecha_nac as birth_date,
        t1.id_pais as id_country,
        t2.name as country,
        t1.id_status as status,
        t3.id_equipo as id_team,
        t4.nombre as name_team,
        t1.foto as photo
        from Asignacion_Tecnico_Equipo t3
        right join Tecnico t1 on t1.id_tecnico= t3.id_tecnico
        inner join Pais t2 on t1.id_pais = t2.id_pais
        left join Equipo t4 on t4.id_equipo = t3.id_equipo 
        where t1.id_estado = 1 and isnull(t3.fecha_fin);
        `,
        callback)
    }
  },

  edit_dt: async function(con, data, callback) {
    const {id,name,lastname,birth_date,id_country,status,photo} = data;
    await con.query(
      `
      update Tecnico set
      nombre = '${name}',
      apellido ='${lastname}',
      fecha_nac ='${birth_date}',
      id_status = '${status}',
      foto = '${photo}',
      id_pais = '${id_country}'
      where id_tecnico = '${id}';
        ;
      `,
      callback)
  },

  delete_dt: async function(con, data, callback) {
    await con.query(
      `
      update Tecnico set
      id_estado = 3 where id_tecnico = '${data}';
      `,
      callback
    )
  }
}