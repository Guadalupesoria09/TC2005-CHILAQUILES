const express = require('express');
const router = express.Router();
const chilaquiles_controller = require('../controllers/chilaquiles.controller');
router.get('/', chilaquiles_controller.get_root);
module.exports = router;