const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola Desde Nueva Ruta');
});

app.get('/products', (req, res) => {
  res.json({ id: 1, name: 'zapatillas', price: '$78000' });
});

app.get('/categories', (req, res) => {
  res.json({ id: 1, name: 'calzado', quantiy: 120 });
});

app.listen(port, () => {
  console.log('My port: ' + port);
});
