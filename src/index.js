//Para subir el projecto a GitHub:
    //git remote add origin https://github.com/JGomez49/Auth-Notes-mac.git
    //git add .
    //git commit -m "working on ...."
    //git push -u origin main


//Este proyecto es basado en FAZT (https://www.youtube.com/watch?v=Hjp0nTY2dBk)
//Nodejs & Mongodb CRUD
//8, Rutas del Servidor Web con Expressjs
//https://www.youtube.com/watch?v=YR5AmzlO-Ww -> 14. Mensajes con connect-flash
//https://www.youtube.com/watch?v=l4K12TBbwKg -> 15. Vistas de Login y Registro de Usuarios
//https://www.youtube.com/watch?v=EpomajNVcMk -> 16. Registro de Usuario o SignUp
//https://www.youtube.com/watch?v=NN-Jt6EjFAc -> 17. Login de Usuarios con Passport y bcrypt


require('dotenv').config();

const app = require('./server');
require('./database');

console.log('Hola ' +process.env.USER);
console.log('Hoy es: ' + Date());

app.listen(app.get('port'), ()=>{
    console.log('Escuchando en el puerto ' + app.get('port'));
})