const { Router } = require('express');
const auth = require('../middlewares/validateToken');
const mid = require('../middlewares/validations');
const blogPostController = require('../controllers/blogPostController');
const verify = require('../middlewares/verifyCategories');

const bpRouter = Router();

bpRouter.get('/search', auth.validateToken, blogPostController.searchBlogPost);
bpRouter.post('/', auth.validateToken, mid.validateBlogPost, verify.verifyCategories,
  blogPostController.addBlogPost);
bpRouter.get('/', auth.validateToken, blogPostController.getBlogPosts);
bpRouter.get('/:id', auth.validateToken, blogPostController.getBlogPostById);
bpRouter.put('/:id', auth.validateToken, mid.validateUpdateBlogPost,
  blogPostController.updateBlogPost);
bpRouter.delete('/:id', auth.validateToken, blogPostController.deleteBlogPost);

module.exports = bpRouter;