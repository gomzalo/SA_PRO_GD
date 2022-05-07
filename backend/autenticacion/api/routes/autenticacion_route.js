const express = require('express');
const router = new express.Router();
const autenticacion_controller = require('../controllers/autenticacion_controller');
const app = express();

router.post('/', autenticacion_controller.login);
router.get('/', autenticacion_controller.validar_cuenta);
router.get('/reset-password', autenticacion_controller.reset_password);
router.post('/temporal-password', autenticacion_controller.temp_pass);
router.post('/reset-password', autenticacion_controller.reset_pass);
// ::::::::::::::::::::::::     REPORTES    ::::::::::::::::::::::::


module.exports = router