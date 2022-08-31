const express = require('express');

// ...

const app = express();

app.use(express.json());

// ...
const validate = require('./database/middlewares/validations');
const tokenValidation = require('./database/middlewares/validateToken');
const loginController = require('./database/controllers/loginController');
const userController = require('./database/controllers/userController');
const categoryController = require('./database/controllers/categoryController');

app.post('/login', validate.validateLogin, loginController.login);
app.post('/user', validate.validateUser, userController.addUser);
app.get('/user', tokenValidation.validateToken, userController.getAllUsers);
app.get('/user/:id', tokenValidation.validateToken, userController.getUserById);
app.post('/categories', tokenValidation.validateToken, 
  validate.validateCategory, categoryController.addCategory);
app.get('/categories', tokenValidation.validateToken, categoryController.getAllCategories);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
