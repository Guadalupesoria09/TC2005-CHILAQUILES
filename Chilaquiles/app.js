const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');

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

//Middleware
const prepararRutas = require('./routes/preparar.routes');

app.use('/preparar', prepararRutas);

app.use('/about', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'old_labs', 'about.html'));
});

app.get('/', (request, response, next) => {
    console.log('Otro middleware!');
    response.send(`
        ${html_header}
        <header>
            <h1 class="title">Chilaquiles</h1>
        </header>
        <main>
            <br>
            <p class="block">
                <strong>¡hola mundo!</strong> 
                Los <span>chilaquiles</span> son <em>deliciosos</em>. 
            </p>
            <table class="table">
                <tbody>
                    <tr>
                        <td>Con salsa verde</td>
                        <td>Con salsa de mole</td>
                    </tr>
                    <tr>
                        <td>Crema, queso y aguacate</td>
                        <td>Crema, queso y aguacate</td>
                    </tr>
                </tbody>
                <tfoot>
                    <td>Nuestros mejores chilaquiles</td>
                </tfoot>
                <thead>
                    <tr>
                        <th>Chilaquiles verdes</th>
                        <th>Chilaquiles rojos</th>
                    </tr>
                </thead>
            </table>
            <a href="/preparar" class="button is-warning" id="boton_chilaquiles">Preparar orden</a>
            <button style="display:none" class="button is-success" id="boton_salsa_verde">Poner salsa verde</button>
            <button style="display:none" class="button is-warning" id="boton_suerte">Voy a tener suerte</button>
            <button style="display:none" class="button is-danger" id="boton_salsa_roja">Poner salsa roja</button>
            <button style="display:none" class="button is-danger" id="boton_salsa_rojaverde">Poner salsa roja y verde</button>
            <br><br>
            <img width="40%" id="imagen_chilaquiles" src="" alt="" />
            <p>Anímate a probar suerte con los chilaquiles de la casa</p>
            <br><br>
            ${html_footer}
    `); 
});

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send(`
            ${html_header}
            <header>
                <h1 class="title">404 No hay chilaquiles</h1>
            </header>
            <main>
                <br>
                <p class="block">
                    Lo sentimos, los <span>chilaquiles</span> que estás buscando no existen en nuestro menú. 
                </p>
            ${html_footer}
        `);
})

app.listen(3000);