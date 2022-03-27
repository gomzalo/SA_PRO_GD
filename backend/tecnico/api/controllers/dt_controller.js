const dt_model = require('../models/dt_model');

module.exports = {
  create_dt: async function(req, res) {
    dt_model.create_dt(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al crear al director tecnico',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: [],
          msj: 'Director tecnico creado con exito'
        });
      }
    });  
  },
  
  get_dt: function(req, res)   {
    dt_model.get_dt(req.con, req.query, function(err, rows){
      console.log(req.query);
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al obtener director(es) tecnico(s)',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msj: 'Director(es) tecnico(s) obtenido(s) con éxito.'
        });
      }
    });
  },
  
  edit_dt: async function(req, res) {
    dt_model.edit_dt(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al actualizar director tecnico',
          error: err.toString()
        });
      } else {
        if(rows.affectedRows < 1){
          res.status(400).send({
            status: false,
            data: [],
            msj: 'Error al actualizar director tecnico',
            error: 'No existe, el ID indicado'
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msj: 'Director tecnico actualizado con exito.'
          });
        }
      }
    });
  },
  
  delete_dt: async function(req, res) {
    dt_model.delete_dt(req.con, req.query.id, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msj: 'Error al eliminar director tecnico',
          error: err.toString()
        });
      } else {
        if(rows.affectedRows < 1){
          res.status(400).send({
            status: false,
            data: [],
            msj: 'Error al eliminar director tecnico',
            error: 'No existe, el ID indicado'
          });
        } else {
          res.status(200).send({
            status: true,
            data: [],
            msj: 'Director tecnico eliminado con exito'
          });
        }
      }
    });  
  }
}