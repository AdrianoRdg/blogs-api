const { verifyToken } = require('../helpers/token');

async function validateToken(req, res, next) {
  const token = req.headers.authorization;

  try {
    if (!token) return res.status(401).json({ message: 'Token not found' });
    verifyToken(token);

    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = { validateToken };