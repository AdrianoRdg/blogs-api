const { Router } = require('express');
const auth = require('../middlewares/validateToken');
const mid = require('../middlewares/validations');
const categoryController = require('../controllers/categoryController');

const cRouter = Router();

cRouter.post('/', auth.validateToken, mid.validateCategory, categoryController.addCategory);
cRouter.get('/', auth.validateToken, categoryController.getAllCategories);

module.exports = cRouter;