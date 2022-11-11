const { Category } = require('../database/models');

async function verifyCategories(req, res, next) {
    const { categoryIds } = req.body;

    const searchCategories = categoryIds.map(async (id) => Category.findAll({ where: id }));
    const categories = await Promise.all(searchCategories);

    const checkCategories = categories.every((category) => category.length >= 1);

    if (!checkCategories) return res.status(400).json({ message: '"categoryIds" not found' });

    next();
}

module.exports = { verifyCategories };