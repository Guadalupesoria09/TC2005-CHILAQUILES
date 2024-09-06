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
]


//http es el módulo que contiene todas las funciones de un servidor http
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');

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

    if (request.url == "/preparar" && request.method == "GET") {

        response.write(`
                        ${html_header}

                        <header>
                            <h1 class="title">Preparar chilaquiles :) </h1>
                        </header>
                        <main>
                            <br><br>
                            <form action="/preparar" method="POST">
                            <div class="field">
                                <label class="label" for="nombre">Nombre</label>
                                <div class="control">
                                    <input id="nombre" name="nombre" class="input" type="text" placeholder="Nombre completo" required>
                                </div>
                            </div>

                            <div class="field">
                                    <label for="salsa" class="label">Salsa</label>
                                    <div class="control">
                                        <div class="select">
                                            <select id="salsa" name="salsa">
                                                <option value="verde">Verde</option>
                                                <option value="roja">Roja</option>
                                                <option value="roja y verde">Roja y Verde</option>
                                                <option value="mole">Mole</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="control">
                                <input type="submit" class="button is-link" value="Preparar">
                                </div>

                            </form>
                        ${html_footer}                       
        `);
        response.end();

    } else if (request.url == "/preparar" && request.method == "POST") { 

        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const salsa = datos_completos.split('&')[1].split('=')[1];
            console.log(`Preparando chilaquiles con salsa ${salsa}`);

            if(salsa == "verde") {
                response.write(`
                    ${html_header}
                    <img alt="${chilaquiles[0].descripcion}" src="${chilaquiles[0].imagen}">
                    ${html_footer}
                `);
            } else if (salsa == "roja") {
                response.write(`
                    ${html_header}
                    <img alt="${chilaquiles[1].descripcion}" src="${chilaquiles[1].imagen}">
                    ${html_footer}
                `);
            } else if (salsa == "roja y verde") {
                response.write(`
                    ${html_header}
                    <img alt="${chilaquiles[2].descripcion}" src="${chilaquiles[2].imagen}">
                    ${html_footer}
                `);
            } else if (salsa == "mole"){
                response.write(`
                    ${html_header}
                    <img alt="${chilaquiles[3].descripcion}" src="${chilaquiles[3].imagen}">
                    ${html_footer}
                `);
            }
            response.end();
        });

    } else {

        response.write(`
                
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
                    <br><br>
                    <img width="40%" id="imagen_chilaquiles" src="" alt="" />
                    <p>Anímate a probar suerte con los chilaquiles de la casa</p>
                    <br><br>
                    
                    ${html_footer}
                
 `);

 response.end();

}
    
});


server.listen(3000);