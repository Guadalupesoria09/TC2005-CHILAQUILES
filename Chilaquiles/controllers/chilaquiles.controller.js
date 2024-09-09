const Chilaquiles = require('../models/chilaquiles.model')

exports.get_root = (request, response, next) => {

    const cookies = request.get('Cookie');
    let ultimo_pedido = '';
    let imagen = '';
    if(cookies) {
        ultimo_pedido = cookies.split(';')[0].split('=')[1];
        imagen = cookies.split(';')[1].split('=')[1];
    }

    let mensaje = request.session.mensaje || '';
    if (request.session.mensaje) {
        request.session.mensaje = '';
    }

    Chilaquiles.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('inicio', {
                username: request.session.username || '',
                chilaquiles: rows,
                ultimo_pedido: ultimo_pedido,
                imagen: imagen,
                mensaje: mensaje,
            });
        })
        .catch((error) => {
            console.log(error);
        });

};

exports.get_crear = (request, response, next) => {
    response.render('crear', {
        username: request.session.username || '',
    });
};

exports.post_crear = (request, response, next) => {
    const chilaquiles = new Chilaquiles(request.body.descripcion, 
        request.body.imagen);

        request.session.mensaje = `${chilaquiles.descripcion} registro exitoso`;

        chilaquiles.save()
        .then(() => {
            return response.redirect('/');
        }).catch((error) => {
            console.log(error)
        });
    
};
