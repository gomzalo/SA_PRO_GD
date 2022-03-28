const jwt = require('jsonwebtoken');

module.exports = {
  
  player_transfer: async function(con, data, callback) {
    const {id_player,id_team_origin,id_team_destination,start_date,end_date} = data;
    await con.query(
      `
      call transfer_jugador(${id_player},${id_team_origin},${id_team_destination},'${start_date}','${end_date}','Transferencia jugador');
      `,
      callback
    )
  },
}