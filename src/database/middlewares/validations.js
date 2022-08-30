const schemas = require('./schemas');

async function validateLogin(req, res, next) {
  const data = req.body;
  const { error } = schemas.loginSchema.validate(data);

  if (error) return res.status(400).json({ message: error.message });

  next();
}

async function validateUser(req, res, next) {
  const data = req.body;
  const { error } = schemas.userSchema.validate(data);

  if (error) return res.status(400).json({ message: error.message });

  next();
}

module.exports = { validateLogin, validateUser };