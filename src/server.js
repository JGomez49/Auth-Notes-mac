//method-override: https://www.youtube.com/watch?v=dFb1r4rUYMQ


const express = require('express');
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const methodOverride = require('method-override');


// Initializations:
const app = express();

// Settings:
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares:
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Global Variables:
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Routes:


// Static Files:
app.set(express.static(path.join(__dirname, 'public')));

module.exports = app;
