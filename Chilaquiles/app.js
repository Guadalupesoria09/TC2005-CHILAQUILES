const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); 
});

app.use('/preparar', (request, response, next) => {
    console.log('Ruta /preparar');
    response.send('/preparar'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); 
});
app.listen(3000);