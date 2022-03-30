const employee_model = require('../models/employee_model');

module.exports = {
  player_transfer: async function(req, res) {
    employee_model.player_transfer(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al transferir jugador.',
          error: err.toString()
        });
      } else {
        console.log(rows.length)
        res.status(200).send({
          status: true,
          data: rows,
          msj: 'Jugador transferido con éxito.'
        });
      }
    });  
  },
  
  get_player_transfers: function(req, res)   {
    employee_model.get_player_transfers(req.con, req.query, function(err, rows){
      console.log(req.query);
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al obtener el log de transferencias.',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msj: 'Log de transferencias obtenido con éxito.'
        });
      }
    });
  },
  dt_transfer: async function(req, res) {
    employee_model.dt_transfer(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al transferir director técnico.',
          error: err.toString()
        });
      } else {
        console.log(rows.length)
        res.status(200).send({
          status: true,
          data: rows,
          msj: 'Director técnico transferido con éxito.'
        });
      }
    });  
  },
  
  get_dt_transfers: function(req, res)   {
    employee_model.get_dt_transfers(req.con, req.query, function(err, rows){
      console.log(req.query);
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al obtener el log de transferencias.',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msj: 'Log de transferencias obtenido con éxito.'
        });
      }
    });
  },
}