const service = require('../services/loginService');

async function login(req, res) {
  const data = req.body;
  const { message, code, token } = await service.login(data);

  if (message) return res.status(code).json({ message });

  return res.status(200).json({ token });
}

module.exports = { login };
