const Chilaquiles = require('../models/chilaquiles.model')

exports.get_root = (request, response, next) => {

    const cookies = request.get('Cookie');
    let ultimo_pedido = '';
    let imagen = '';
    if(cookies) {
        ultimo_pedido = cookies.split(';')[0].split('=')[1];
        imagen = cookies.split(';')[1].split('=')[1];
    }

    response.render('inicio', {
        chilaquiles: Chilaquiles.fetchAll(),
         ultimo_pedido: ultimo_pedido,
        imagen: imagen,
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
