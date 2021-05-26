const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Initializations:
const app = express();

// Settings:
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares:
app.use(express.urlencoded({extended: false}));

// Global Variables:
app.get('/', (req,res)=>{
    try {
        res.render('index');
    } catch (error) {
        console.log(error);
    }
});

// Routes:


// Static Files:
app.set(express.static(path.join(__dirname, 'public')));

module.exports = app;
