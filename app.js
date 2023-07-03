const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();

// Servir contenido estatico
app.use( express.static('public') );


//handlerbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//009 Argumentos desde el controlador
app.get('/', (req,res) => {
  res.render('home', {
    nombre: "Huarayo Leonardo",
    titulo: "Nodejs"
  });
});

app.get('/generic', (req, res) => {
  res.render( 'generic', {
    nombre: "Huarayo Leonardo",
    titulo: "Nodejs"
  });
});

app.get('/elements', (req, res) => {
  res.render( 'elements', {
    nombre: "Huarayo Leonardo",
    titulo: "Nodejs"
  });
});

app.get('*', (req,res) => {
  res.sendFile( __dirname + '/public/back/404.html');//construyecto el path
});


const port =  process.env.PORT;

app.listen(port,()=> console.log(`Example app listening at http://localhost:${port}`));