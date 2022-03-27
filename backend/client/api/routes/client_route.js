const express = require('express');
const router = new express.Router();
const client_controller = require('../controllers/client_controller');

router.get('/', client_controller.get);
router.get('/all_countries', client_controller.all_countries);
router.post('/register', client_controller.create);
router.get('/email_confirmation', client_controller.email_confirmation);
router.post('/send_email_confirmation', client_controller.send_email);

// *************************************************
router.put('/', client_controller.update);
router.delete('/:no_id', client_controller.delete);


module.exports = router