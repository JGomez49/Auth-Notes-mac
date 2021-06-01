
//Este proyecto es basado en FAZT (https://www.youtube.com/watch?v=Hjp0nTY2dBk)
//Nodejs & Mongodb CRUD
//8, Rutas del Servidor Web con Expressjs

require('dotenv').config();

const app = require('./server');
require('./database');

console.log('Hola ' +process.env.USER);
console.log('Hoy es: ' + Date());

app.listen(app.get('port'), ()=>{
    console.log('Escuchando en el puerto ' + app.get('port'));
})