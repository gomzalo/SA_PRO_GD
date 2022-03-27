module.exports = {
// ||||||||||||||||||||   GET   ||||||||||||||||||||
    get: async function(con, data, callback) {
      const id = data.id;
      if(id != null){
        await con.query(
          `
          SELECT * FROM Pais
          WHERE id_pais = '${id}';
          `,
          callback)
      } else {
        await con.query(
          `
          SELECT * FROM Pais;
          `,
          callback)
      }
    },
  }