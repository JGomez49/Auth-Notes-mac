//Para subir el projecto a GitHub:
    //git remote add origin https://github.com/JGomez49/Auth-Notes-mac.git
    //git add .
    //git commit -m "working on ...."
    //git push -u origin main


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