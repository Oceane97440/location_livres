const express = require('express'),
path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection'),
	  expressValidator = require('express-validator'),
      flash = require('express-flash'),
	  cookieParser = require('cookie-parser'),
      session = require('express-session');
      bodyParser=require('body-parser');


const app = express();

app.use(cookieParser('keyboard cat'));
app.use(session({ 
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));

//Routes
const livreRoutes = require('./routes/livre');

app.use('/livre', livreRoutes);




// settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var http = require('http');

//Connexion BDD
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'livres'
}, 'single'));
app.use(express.urlencoded({extended: false}));
app.use(expressValidator());
app.use(flash());



// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
