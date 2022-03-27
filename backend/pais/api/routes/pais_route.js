const express = require('express');
const router = new express.Router();
const autenticacion_controller = require('../controllers/pais_controller');
const app = express();

app.use((req, res, next) => {
    if(req.headers.referer && req.headers.referer == `http://${url}:${port}/auth`){
        next();
    } else { 
        res.json({err: "Unauthorized access"});
    }
});

router.get('/', autenticacion_controller.get);

module.exports = router