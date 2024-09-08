const Chilaquiles = require('../models/chilaquiles.model')
exports.get_root = (request, response, next) => {
    response.render('inicio', {
        chilaquiles: Chilaquiles.fetchAll(),
    });

};

exports.get_crear = (request, response, next) => {
    response.render('crear');
};

exports.post_crear = (request, response, next) => {
    const chilaquiles = new Chilaquiles(request.body.descripcion, 
        request.body.imagen);

    chilaquiles.save();
    
    response.redirect('/');
};
