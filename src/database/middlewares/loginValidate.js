const schemas = require('./schemas');

async function validateLogin(req, res, next) {
  const data = req.body;

  const { error } = schemas.loginSchema.validate(data);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  next();
}

module.exports = { validateLogin };