const team_model = require('../models/team_model');

module.exports = {
  create_team: async function(req, res) {
    team_model.create_team(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al crear equipo',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: [],
          msg: 'Equipo creado con exito'
        });
      }
    });  
  },
  
  get_team: function(req, res)   {
    team_model.get_team(req.con, req.query, function(err, rows){
      console.log(req.query);
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al obtener equipo(s)',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msg: 'Información de equipo(s)'
        });
      }
    });
  },
  
  edit_team: async function(req, res) {
    team_model.edit_team(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al actualizar equipo',
          error: err.toString()
        });
      } else {
        if(rows.affectedRows < 1){
          res.status(400).send({
            status: false,
            data: [],
            msg: 'Error al actualizar equipo',
            error: 'No existe, el ID indicado'
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msg: 'Equipo actualizado con exito.'
          });
        }
      }
    });
  },
  
  delete_team: async function(req, res) {
    team_model.delete_team(req.con, req.query.id, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al eliminar equipo',
          error: err.toString()
        });
      } else {
        if(rows.affectedRows < 1){
          res.status(400).send({
            status: false,
            data: [],
            msg: 'Error al eliminar equipo',
            error: 'No existe, el ID indicado'
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msg: 'Equipo eliminado con exito'
          });
        }
      }
    });  
  }
}