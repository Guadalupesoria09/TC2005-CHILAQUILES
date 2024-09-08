const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.use('/about', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'old_labs', 'about.html'));
});

const prepararRutas = require('./routes/preparar.routes');

app.use('/preparar', prepararRutas);
const chilaquilesRutas = require('./routes/chilaquiles.routes');

app.use('/', chilaquilesRutas);

app.use((request, response, next) => {

    response.statusCode = 404;
    response.render('404');
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});