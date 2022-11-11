const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const { BlogPost, PostCategory, Category, User } = require('../database/models');

async function addBlogPost({ title, content, categoryIds, userId }) {
    const newBlogPost = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create(
        { title, content, userId, updated: new Date(), published: new Date() }, 
        { transaction: t },
        );
      
      await Promise.all(categoryIds.map(async (id) => PostCategory.create(
        { postId: post.id, categoryId: id },
        { transaction: t },
      )));

      const newPost = {
         id: post.id, title, content, userId, updated: post.updated, published: post.published,
      };
      return { code: 201, data: newPost };
    });
    return newBlogPost;
}

async function getBlogPosts() {
  const posts = await BlogPost.findAll(
    { include: [
      { model: User, 
        as: 'user', 
        attributes: { 
          exclude: ['password'],
        },
      },
      { model: Category,
          as: 'categories',
          through: {
          attributes: [],
        },
      },
    ],
    },
  );

  return { code: 200, data: posts };
}

module.exports = { addBlogPost, getBlogPosts };