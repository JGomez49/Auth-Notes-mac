require('dotenv').config();

const app = require('./server');
require('./database');

console.log('Hola ' +process.env.USER);
console.log('Hoy es: ' + Date());

app.listen(app.get('port'), ()=>{
    console.log('Escuchando en el puerto ' + app.get('port'));
})