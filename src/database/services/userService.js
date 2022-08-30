const { User } = require('../models');
const { createToken } = require('../helpers/token');

async function addUser({ displayName, email, password, image }) {
  const verifyUser = await User.findOne({ where: { email } });

  if (verifyUser) return { code: 409, message: 'User already registered' };

  const newUser = await User.create({ displayName, email, password, image });
  
  const payload = { id: newUser.id, email: newUser.email };
  const token = createToken(payload);
  
  return { code: 201, token };
}

module.exports = { addUser };
