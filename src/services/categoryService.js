const { Category } = require('../database/models');

async function addCategory(name) {
  const data = await Category.create({ name });
  const createdCategory = { id: data.id, name: data.name };

  return { code: 201, data: createdCategory };
}

async function getAllCategories() {
  const data = await Category.findAll();

  return { code: 200, data };
}

module.exports = { addCategory, getAllCategories };