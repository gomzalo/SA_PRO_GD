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
  
  get_employee: function(req, res)   {
    employee_model.get_employee(req.con, req.query, function(err, rows){
      console.log(req.query);
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al obtener jugador(es)',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msj: 'Jugador(es) obtenido(s) con éxito.'
        });
      }
    });
  },
  
  edit_employee: async function(req, res) {
    employee_model.edit_employee(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al actualizar jugador',
          error: err.toString()
        });
      } else {
        if(rows.affectedRows < 1){
          res.status(400).send({
            status: false,
            data: [],
            msj: 'Error al actualizar equipo',
            error: 'No existe, el ID indicado'
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msj: 'Jugador actualizado con exito.'
          });
        }
      }
    });
  },
  
  delete_employee: async function(req, res) {
    employee_model.delete_employee(req.con, req.query.id, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al eliminar Jugador',
          error: err.toString()
        });
      } else {
        if(rows.affectedRows < 1){
          res.status(400).send({
            status: false,
            data: [],
            msj: 'Error al eliminar equipo',
            error: 'No existe, el ID indicado'
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msj: 'Jugador eliminado con exito'
          });
        }
      }
    });  
  }
}