const service = require('../services/categoryService');

async function addCategory(req, res) {
  const { name } = req.body;
  const { code, data } = await service.addCategory(name);

  return res.status(code).json(data);
}

module.exports = { addCategory };