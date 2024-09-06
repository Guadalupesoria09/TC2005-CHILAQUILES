const filesystem = require('fs'); //fs es el módulo de filesystem

//Escribe el segundo parámetro en el archivo del primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola desde node');


//Código asíncrono
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 


setTimeout(() => {
    console.log("jojo te hackié");
}, 12000);


//http es el módulo que contiene todas las funciones de un servidor http
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    if (request.url == "/preparar") {

        response.write(`

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
                        <a class="navbar-item">
                        Inicio
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
                        <header>
                            <h1 class="title">Preparar chilaquiles :) </h1>
                        </header>
                        <main>
                            <form action="/preparar" method="POST">
                            <div class="field">
                                <label class="label" for="nombre">Nombre</label>
                                <div class="control">
                                    <input id="nombre" name="nombre" class="input" type="text" placeholder="Lupita Soria">
                                </div>
                            </div>
                                
                            </form>
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
                <script src="js/poe.js"></script>
            </body>
        </html>
        `);

    } else {

        response.write(`

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
                        <a class="navbar-item">
                        Inicio
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
                                <td>Con salsa de chipotle</td>
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
                    <br><br>
                    <img width="40%" id="imagen_chilaquiles" src="" alt="" />
                    <p>Anímate a probar suerte con los chilaquiles de la casa</p>
                    <br><br>
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
        <script src="js/poe.js"></script>
    </body>
    </html>
    `);

}
    
    response.end();
});


server.listen(3000);