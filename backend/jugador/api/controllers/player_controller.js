const player_model = require('../models/player_model');

module.exports = {
  create_player: async function(req, res) {
    player_model.create_player(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al crear jugador',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: [],
          msj: 'Jugador creado con exito'
        });
      }
    });  
  },
  
  get_player: function(req, res)   {
    player_model.get_player(req.con, req.query, function(err, rows){
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
  
  edit_player: async function(req, res) {
    player_model.edit_player(req.con, req.body, async function(err, rows){
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
  
  delete_player: async function(req, res) {
    player_model.delete_player(req.con, req.query.id, async function(err, rows){
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