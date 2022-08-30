const express = require('express');

// ...

const app = express();

app.use(express.json());

// ...
const validate = require('./database/middlewares/loginValidate');
const controller = require('./database/controllers/loginController');

app.post('/login', validate.validateLogin, controller.login);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
