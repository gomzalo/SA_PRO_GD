const userm = require('../models/user_model')

module.exports = {
    all: function(req, res) {
      userm.all(req.con, function(err, rows) {
        // res.render("usuario/index", { data: rows })
        console.log(rows);
        console.log(new Date())
        res.status(200).send(rows);
      })
    },
  

    add: function(req, res) {
      userm.verifyEmail(req.con, req.body, function(err, rowss){
        // console.log(rowss[0].num)
        var num = rowss[0].num;
        console.log(num)
        if (num > 0) {
          
          res.status(409).send({
            status: false,
            msj: 'Error al crear el usuario'
          });
          
        } else {
        // console.log(res)
          userm.add(req.con, req.body, function(err, rows) {
            // res.redirect("/home")
            console.log(rows);
            if(rows.length != 0){
              res.status(200).send({
                status: true,
                msj: 'Usuario creado con exito'
              });
            }
          })
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