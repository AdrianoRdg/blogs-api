const { User } = require('../models');
const { createToken } = require('../helpers/token');

async function login({ email, password }) {
  const user = await User.findOne({ where: { email, password } });

  if (!user) return { code: 400, message: 'Invalid fields' };

  const payload = { id: user.id, email: user.email };
  const token = createToken(payload);

  return { code: 200, token };
}

module.exports = { login };