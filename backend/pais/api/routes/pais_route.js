const express = require('express');
const router = new express.Router();
const pais_controller = require('../controllers/pais_controller');
const app = express();

router.get('/', pais_controller.get);

module.exports = router