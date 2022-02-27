const userm = require('../../models/user_models')

module.exports = {
    all: function(req, res) {
      userm.get(req.con, function(err, rows) {
        // res.render("usuario/index", { data: rows })
        console.log(rows);
        res.status(200).send({
            data: rows
        });
        // console.log("res", res)
      })
    },
  

    add: function(req, res) {
      userm.verifyCorreo(req.con, req.body, function(err, rowss){
        // console.log(rowss[0].num)
        var num = rowss[0].num;
        console.log(num)
        if (num > 0) {
          
          res.status(200).send({
            data: 'correo existe'
          });
          
        } else {
        // console.log(res)
          userm.add(req.con, req.body, function(err, rows) {
            // res.redirect("/home")
            if(rows.affectedRows != 0){
              res.status(200).send({
                data: 'Agregado'
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