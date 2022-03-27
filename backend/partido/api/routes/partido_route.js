const express = require('express');
const router = new express.Router();
const partido_controller = require('../controllers/partido_controller');
const app = express();

app.use((req, res, next) => {
    if(req.headers.referer && req.headers.referer == `http://${url}:${port}/match`){
        next();
    } else { 
        res.json({err: "Unauthorized access"});
    }
});

/*
Estados (campo status):
    Sin iniciar: 1
    Iniciado = 2
    Finalizado = 3
    Suspendido = 4
*/

router.get('/', partido_controller.get_game);
router.post('/', partido_controller.create_game);
router.put('/', partido_controller.edit_game);
router.delete('/', partido_controller.delete_game);

module.exports = router