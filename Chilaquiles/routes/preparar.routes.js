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

const html_header = `
<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Chilaquiles</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
            </head>
            <body>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.fPCPUSDS8XuKkKOnQBU2BgHaFj&pid=Api&P=0&h=70"> 
          
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a> 
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start"> 
                        <a href="/" class="navbar-item">
                        Inicio
                        </a>
                        <a href="/about" class="navbar-item">
                        About
                        </a>
                  </div>
                  <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                            <strong>Registrarse</strong>
                            </a>
                            <a class="button is-light">
                            Iniciar sesión
                            </a>
                        </div>
                    </div>
                </div>
              </div>
            </nav>
            <section class="section">
                    <div class="container">
`;
const html_footer = `
                        </main>
                        <footer class="footer">
                            <div class="content has-text-centered">
                                <p>
                                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
                                    The source code is licensed
                                    <a href="https://opensource.org/license/mit">MIT</a>. The
                                    website content is licensed
                                    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
                                    >CC BY NC SA 4.0</a
                                    >.
                                </p>
                            </div>
                        </footer>
                    </div>
                </section>
            </body>
        </html>
    `;
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
    response.send(`
        ${html_header}
        <img alt="${chilaquiles[tipo_chilaquiles].descripcion}" src="${chilaquiles[tipo_chilaquiles].imagen}">
        ${html_footer}
    `);
});
module.exports = router;