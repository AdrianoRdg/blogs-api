const service = require('../services/userService');

async function addUser(req, res) {
  const data = req.body;
  
  const { message, code, token } = await service.addUser(data);

  if (message) return res.status(code).json({ message });

  return res.status(code).json({ token });
}

async function getAllUsers(_req, res) {
  const { code, data } = await service.getAllUsers();

  return res.status(code).json(data);
}

async function getUserById(req, res) {
  const { id } = req.params;
  
  const { message, code, data } = await service.getUserById(id);

  if (message) res.status(code).json({ message });

  return res.status(code).json(data);
}

async function deleteUser(req, res) {
  const { userId } = req;

  const { code } = await service.deleteUser(userId);

  return res.status(code).json();
}

module.exports = { addUser, getAllUsers, getUserById, deleteUser };