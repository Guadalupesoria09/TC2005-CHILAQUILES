const express = require('express');

const router = express.Router();

const chilaquiles_controller = require('../controllers/chilaquiles.controller');

router.get('/crear', chilaquiles_controller.get_crear);
router.post('/crear', chilaquiles_controller.post_crear);
router.get('/:chilaquil_id', chilaquiles_controller.get_root)
router.get('/', chilaquiles_controller.get_root);

module.exports = router;