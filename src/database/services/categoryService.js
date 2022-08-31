const { Category } = require('../models');

async function addCategory(name) {
  const data = await Category.create({ name });
  const createdCategory = { id: data.id, name: data.name };

  return { code: 201, data: createdCategory };
}

module.exports = { addCategory };