const { Router } = require('express');
const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const blogPostRouter = require('./blogPostRouter');

const mainRouter = Router();

mainRouter.use('/login', loginRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/categories', categoryRouter);
mainRouter.use('/post', blogPostRouter);

module.exports = mainRouter;