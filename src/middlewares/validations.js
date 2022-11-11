const schemas = require('./schemas');

function validateLogin(req, res, next) {
  const data = req.body;
  const { error } = schemas.loginSchema.validate(data);

  if (error) return res.status(400).json({ message: error.message });

  next();
}

function validateUser(req, res, next) {
  const data = req.body;
  const { error } = schemas.userSchema.validate(data);

  if (error) return res.status(400).json({ message: error.message });

  next();
}

function validateCategory(req, res, next) {
  const data = req.body;

  const { error } = schemas.categorySchema.validate(data);

  if (error) return res.status(400).json({ message: error.message });

  next();
}

function validateBlogPost(req, res, next) {
  const data = req.body;

  const { error } = schemas.blogPostSchema.validate(data);
  
  if (error) return res.status(400).json({ message: error.message });
  
  next();
}

module.exports = { validateLogin, validateUser, validateCategory, validateBlogPost };