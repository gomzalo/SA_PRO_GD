const express = require('express');
const router = new express.Router();
const competition_controller = require('../controllers/competition_controller');
const app = express();

app.use((req, res, next) => {
    if(req.headers.referer && req.headers.referer == `http://${url}:${port}/competition`){
        next();
    } else { 
        res.json({err: "Unauthorized access"});
    }
});

/*
Tipo (campo type):
    Liga = 1
    Eliminatoria = 2
    Copa = 3
    Super Copa = 4
    Cuadrangular = 5
    Triangular = 6
*/

router.get('/', competition_controller.get_competition);
router.post('/', competition_controller.create_competition);
router.put('/', competition_controller.edit_competition);
router.delete('/', competition_controller.delete_competition);

module.exports = router