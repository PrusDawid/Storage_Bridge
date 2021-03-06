'use strict';
const express = require('express')
const path = require('path');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./routes/index')
const errorsHandler = require('./middlewares/errors')
const fileUpload = require('express-fileupload');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
	secret:'little monkey',
	saveUninitialized: true,
    resave: false,
    cookie: {}
}));

app.use(flash())
app.use(fileUpload());

app.use('/', routes)

app.use(errorsHandler.notFound);
app.use(errorsHandler.catchErrors);

module.exports = app;