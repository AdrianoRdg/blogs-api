const service = require('../services/userService');

async function addUser(req, res) {
  const data = req.body;
  const { message, code, token } = await service.addUser(data);

  if (message) return res.status(code).json({ message });

  return res.status(code).json({ token });
}

module.exports = { addUser };