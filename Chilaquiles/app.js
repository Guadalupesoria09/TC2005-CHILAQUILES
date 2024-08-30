const filesystem = require('fs'); //fs es el módulo de filesystem
//Escribe el segundo parámetro en el archivo del primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola desde node');
// const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
// for (let item of arreglo) {
//     setTimeout(() => {
//         console.log(item);
//     }, item);
// } 