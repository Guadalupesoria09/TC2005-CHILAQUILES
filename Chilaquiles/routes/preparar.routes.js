const express = require('express');

const router = express.Router();

const preparar_controller = require('../controllers/preparar.controller');

router.get('/', preparar_controller.get_preparar);

router.post('/', preparar_controller.post_preparar);

module.exports = router;