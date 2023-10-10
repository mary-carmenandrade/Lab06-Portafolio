const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  const datosExtras = {
    nombre:'Mary Carmen Andrade',
    años: 19,
    instituto: 'Tecsup',
    carrera: 'Diseño y Desarrollo de Software',
    ciclo: '5to'
  };
  res.render('inicio', datosExtras);
});

app.get('/habilidades', (req, res) => {
  const datosDinamicos = {
    lenguaje1: 'JavaScript',
    lenguaje2: 'HTML/CSS', 
    lenguaje3: 'Python',
    f1: 'Node.js',
    f2: 'React',
    f3: 'Express.js'
  };
  res.render('habilidades.ejs', datosDinamicos);
});

app.get('/contacto', (req, res) => {
  const datosDinamicos = {
    mensaje:"Puedes contactarme a través de mi correo electrónico:"
  }
  res.render('contacto', datosDinamicos);
});



app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
