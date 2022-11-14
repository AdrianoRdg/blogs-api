const { Router } = require('express');
const auth = require('../middlewares/validateToken');
const mid = require('../middlewares/validations');
const userController = require('../controllers/userController');

const uRouter = Router();

uRouter.post('/', mid.validateUser, userController.addUser);
uRouter.get('/', auth.validateToken, userController.getAllUsers);
uRouter.post('/:id', auth.validateToken, userController.getUserById);

module.exports = uRouter;