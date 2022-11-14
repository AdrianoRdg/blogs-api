const { Router } = require('express');
const mid = require('../middlewares/validations');
const loginController = require('../controllers/loginController');

const lRouter = Router();

lRouter.post('/', mid.validateLogin, loginController.login);

module.exports = lRouter;