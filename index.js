const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = 4000;
// const whitelist = // son los mismos (si pego los links platzi me impide comentar)
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'), false);
//     }
//   }
// }

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

routerApi(app);

app.listen(port, () => {
  console.log('http://localhost:' + port);
});
