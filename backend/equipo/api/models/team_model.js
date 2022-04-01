module.exports = {
  create_team: async function(con, data, callback) {
    const {name, foundation_date, id_country, photo} = data;
    const abr = name.substring(0, 3).toUpperCase();
    await con.query(
      `
      insert into Equipo ( 
        nombre,
        foundation_date,
        abreviado,
        photo,
        id_pais,
        is_club,
        id_estado
        )
      VALUES (
        '${name}',
        '${foundation_date}',
        '${abr}',
        '${photo}',
        '${id_country}',
        1,
        1
        );
      `,
      callback
    )
  },

  get_team: async function(con, data, callback) {
    console.log("entro a get_team");
    const id = data.id;
    if(id != null){
      await con.query(
        `
        select 
        t1.id_equipo as id,
        t1.nombre as name,
        t1.abreviado,is_club,foundation_date,photo,
        t1.id_pais as id_country,
        t2.name as country
        from Equipo t1 inner join Pais t2 on t1.id_pais = t2.id_pais
        where t1.id_equipo = '${id}' and t1.id_estado = 1;
        `,
        callback)
    } else {
      await con.query(
        `
        select 
        t1.id_equipo as id,
        t1.nombre as name,
        t1.abreviado,is_club,foundation_date,photo,
        t1.id_pais as id_country,
        t2.name as country
        from Equipo t1 inner join Pais t2 on t1.id_pais = t2.id_pais
        where id_estado = 1;
        `,
        callback)
    }
  },

  edit_team: async function(con, data, callback) {
    const {id,name, foundation_date, id_country, photo} = data;;
    await con.query(
      `
      UPDATE Equipo SET
        nombre = '${name}',
        foundation_date = '${foundation_date}',
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
      update Equipo set
      id_estado = 3
      where id_equipo = ${data};
      `,
      callback
    )
  }
}