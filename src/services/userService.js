const { User } = require('../database/models');
const { createToken } = require('../helpers/token');

async function addUser({ displayName, email, password, image }) {
  const verifyUser = await User.findOne({ where: { email } });

  if (verifyUser) return { code: 409, message: 'User already registered' };

  const newUser = await User.create({ displayName, email, password, image });
  
  const payload = { id: newUser.id, email: newUser.email };
  const token = createToken(payload);
  
  return { code: 201, token };
}

async function getAllUsers() {
  const data = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { code: 200, data };
}

async function getUserById(id) {
  const data = await User.findOne({ 
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!data) return { code: 404, message: 'User does not exist' };

  return { code: 200, data };
}

async function deleteUser(userId) {
  await User.destroy({ where: { id: userId } });

  return { code: 204 };
}

module.exports = { addUser, getAllUsers, getUserById, deleteUser };
