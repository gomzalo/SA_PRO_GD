module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT id_pais, name FROM Pais
          WHERE id_pais = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT id_pais, name FROM Pais;
          `,
          callback)
      }
    }
  }