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
     response.write("");
     response.end();
 });


 server.listen(3000);