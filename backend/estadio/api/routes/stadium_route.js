const express = require('express');
const router = new express.Router();
const stadium_controller = require('../controllers/stadium_controller');
const app = express();

app.use((req, res, next) => {
    if(req.headers.referer && req.headers.referer == `http://${url}:${port}/stadium`){
        next();
    } else { 
        res.json({err: "Unauthorized access"});
    }
});

/*
Estado (campo status):
    Disponible = 1
    Remodelación = 2
*/

router.get('/', stadium_controller.get_stadium);
router.post('/', stadium_controller.create_stadium);
router.put('/', stadium_controller.edit_stadium);
router.delete('/', stadium_controller.delete_stadium);

module.exports = router