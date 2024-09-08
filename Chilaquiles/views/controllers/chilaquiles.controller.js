const Chilaquiles = require('../models/chilaquiles.model')
exports.get_root = (request, response, next) => {
    response.render('inicio', {
        chilaquiles: Chilaquiles.fetchAll(),
    });
};