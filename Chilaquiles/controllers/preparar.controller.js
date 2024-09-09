const Chilaquiles = require('../models/chilaquiles.model');


exports.get_preparar = (request, response, next) => {
    console.log('Ruta /preparar');
    response.render('preparar', {
        username: request.session.username || '',
    }); 
};

exports.post_preparar = (request, response, next) => {
    console.log(request.body);
    let tipo_chilaquiles = 0;
    if (request.body.salsa == "roja") {
        tipo_chilaquiles = 1;
    } else if (request.body.salsa == "roja y verde") {
        tipo_chilaquiles = 2;
    } else if (request.body.salsa == "mole"){
        tipo_chilaquiles = 3;
    }

    chilaquiles = Chilaquiles.fetchAll();
    
    response.setHeader('Set-Cookie', [`pedido=${chilaquiles[tipo_chilaquiles].descripcion}`, `imagen=${chilaquiles[tipo_chilaquiles].imagen}`]);
    response.render('preparado.ejs', {
        username: request.session.username || '',
        alt: chilaquiles[tipo_chilaquiles].descripcion,
        src: chilaquiles[tipo_chilaquiles].imagen,
    });
};
