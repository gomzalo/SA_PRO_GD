module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get_stadium: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT e.id_estadio AS id, e.nombre AS name, e.fecha_inaguracion AS fundation_date,
          e.capacidad AS capacity, e.id_pais AS id_country, p.nicename AS country,
          e.direccion AS address, status, e.foto AS photo
          FROM Estadio e
          INNER JOIN Pais p ON e.id_pais = p.id_pais
          WHERE id_estadio = '${id}'
          ;
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT e.id_estadio AS id, e.nombre AS name, e.fecha_inaguracion AS fundation_date,
          e.capacidad AS capacity, e.id_pais AS id_country, p.nicename AS country,
          e.direccion AS address, status, e.foto AS photo
          FROM Estadio e
          INNER JOIN Pais p ON e.id_pais = p.id_pais
          ;
          `,
          callback)
      }
    },
// ||||||||||||||||||||   CREAR   ||||||||||||||||||||
    create_stadium: async function(con, data, callback) {
      const {name, fundation_date, capacity, id_country, address, status, photo} = data;
      await con.query(
        `
        INSERT INTO Estadio ( 
          nombre,
          fecha_inaguracion,
          capacidad,
          direccion,
          foto,
          id_pais,
          status
          )
        VALUES (
          '${name}',
          '${fundation_date}',
          '${capacity}',
          '${address}',
          '${photo}',
          '${id_country}',
          '${status}'
          );
        `,
        callback
      )
    },
// ||||||||||||||||||||   EDITAR   ||||||||||||||||||||
    edit_stadium: async function(con, data, callback) {
      const {id, name, fundation_date, capacity, id_country, address, status, photo} = data;
      await con.query(
        `
        UPDATE Estadio SET
          nombre = '${name}',
          fecha_inaguracion = '${fundation_date}',
          capacidad = '${capacity}',
          direccion = '${address}',
          foto = '${photo}',
          id_pais = '${id_country}',
          status = '${status}'
        WHERE id_estadio = ${id};
          ;
        `,
        callback)
    },
// ||||||||||||||||||||   ELIMINAR   ||||||||||||||||||||
    delete_stadium: async function(con, data, callback) {
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