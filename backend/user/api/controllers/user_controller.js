const userm = require('../models/user_model')

module.exports = {
    all: function(req, res) {
      userm.all(req.con, function(err, rows) {
        res.status(200).send(rows);
      })
    },
  

    add: function(req, res) {
      userm.add(req.con, req.body, function(err, rows){
        console.log("ROWSSSS");
        console.log(rows);
        if(err){
          // console.log(res)
          res.status(409).send({
            status: false,
            msj: 'Error al crear usuario'
          });
        } else {
          res.status(200).send({
            status: true,
            msj: 'Usuario creado con exito'
          });
        }
      });  
    },
    
    validar_email(correo){
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(correo)) {
        return true;
      }
      return false;
    },

    validar_pass(pass, conf){
      if(pass == conf) {
        if(pass.length >= 8) {
            return true;
          }
      }  
      return false;
    }
  }