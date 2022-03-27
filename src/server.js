if (process.env.MODE != 'prd') {
  require('dotenv/config');
}

const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log('O servidor está rodando na porta ' + port);
});
