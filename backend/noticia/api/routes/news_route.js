const express = require('express');
const router = new express.Router();
const news_controller = require('../controllers/news_controller');

router.post('/post', news_controller.create_noticia);
router.get('/post', news_controller.get_noticia);

module.exports = router