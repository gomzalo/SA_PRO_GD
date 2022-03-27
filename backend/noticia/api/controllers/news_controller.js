const news_model = require('../models/news_model');

module.exports = {
  create_noticia: async function(req, res) {
    news_model.create_noticia(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al crear noticia',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: [],
          msg: 'Noticia creada con exito'
        });
      }
    });  
  },
  
  get_noticia: function(req, res)   {
    news_model.get_noticia(req.con, req.query, function(err, rows){
      if(err){
        res.status(400).send({
          status: false,
          data: [],
          msg: 'Error al obtener noticia(s)',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: true,
          data: rows,
          msg: 'Información de noticia(s)'
        });
      }
    });
  }
}