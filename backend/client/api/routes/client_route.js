const express = require('express');
const router = new express.Router();
const client_controller = require('../controllers/client_controller');

router.get('/', client_controller.get);
router.post('/register', client_controller.create);
router.put('/', client_controller.update);
router.delete('/:id', client_controller.delete);
router.post('/membership', client_controller.buy_membership);
router.put('/membership', client_controller.cancel_membership);
router.put('/follow', client_controller.follow_team);
router.get('/all_countries', client_controller.all_countries);

module.exports = router