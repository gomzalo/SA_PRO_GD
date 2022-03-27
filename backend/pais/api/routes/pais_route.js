const express = require('express');
const router = new express.Router();
const pais_controller = require('../controllers/pais_controller');
const app = express();

app.use((req, res, next) => {
    if(req.headers.referer && req.headers.referer == `${url}:${port}/country`){
        next();
    } else { 
        res.json({err: "Unauthorized access"});
    }
});

router.get('/', pais_controller.get);

module.exports = router