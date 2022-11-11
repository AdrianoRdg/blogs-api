const express = require('express');

// ...

const app = express();

app.use(express.json());

// ...
const validate = require('./middlewares/validations');
const tokenValidation = require('./middlewares/validateToken');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const blogPostController = require('./controllers/blogPostController');
const verifyCategories = require('./middlewares/verifyCategories');

app.post('/login', validate.validateLogin, loginController.login);
app.post('/user', validate.validateUser, userController.addUser);
app.get('/user', tokenValidation.validateToken, userController.getAllUsers);
app.get('/user/:id', tokenValidation.validateToken, userController.getUserById);

app.post('/categories', tokenValidation.validateToken, 
  validate.validateCategory, categoryController.addCategory);
app.get('/categories', tokenValidation.validateToken, categoryController.getAllCategories);

app.post('/post', tokenValidation.validateToken, validate.validateBlogPost,
  verifyCategories.verifyCategories, blogPostController.addBlogPost);
app.get('/post', tokenValidation.validateToken, blogPostController.getBlogPosts);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
