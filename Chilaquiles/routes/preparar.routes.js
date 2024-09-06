const express = require('express');

const router = express.Router();

const chilaquiles = [
    {
        descripcion: "Chilaquiles en salsa verde", 
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/1626/3018.jpg",
    },
    {
        descripcion: "Chilaquiles en salsa roja", 
        imagen: "https://tse1.mm.bing.net/th?id=OIP.zJcG6SrXwgYRermppNlwJAHaFA&pid=Api&P=0&h=180",
    },
    {
        descripcion: "Chilaquiles con salsa roja y verde", 
        imagen: "https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2013/09/chilaquiles1.jpg",
    },
    {
        descripcion: "Chilaquiles con mole", 
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/14501/960x640/6890.jpg.jpg",
    },
];


router.get('/', (request, response, next) => {
    console.log('Ruta /preparar');

    response.render('preparar'); 
 
});

router.post('/', (request, response, next) => {
    console.log(request.body);
    let tipo_chilaquiles = 0;
    if (request.body.salsa == "roja") {
        tipo_chilaquiles = 1;
    } else if (request.body.salsa == "roja y verde") {
        tipo_chilaquiles = 2;
    } else if (request.body.salsa == "mole"){
        tipo_chilaquiles = 3;
    }
    response.render('preparado.ejs', {
        alt: chilaquiles[tipo_chilaquiles].descripcion,
        src: chilaquiles[tipo_chilaquiles].imagen,
    });
});
module.exports = router;