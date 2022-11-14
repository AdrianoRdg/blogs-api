const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const { BlogPost, PostCategory, Category, User } = require('../database/models');

async function addBlogPost({ title, content, categoryIds, userId }) {
    const newBlogPost = await sequelize.transaction(async (transaction) => {
      const post = await BlogPost.create(
        { title, content, userId, updated: new Date(), published: new Date() }, 
        { transaction },
      );
      
      await Promise.all(categoryIds.map(async (id) => PostCategory.create(
        { postId: post.id, categoryId: id },
        { transaction },
      )));

      const newPost = {
         id: post.id, title, content, userId, updated: post.updated, published: post.published,
      };
      return newPost;
    });

    return { code: 201, data: newBlogPost };
}

async function getBlogPosts() {
  const posts = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

  return { code: 200, data: posts };
}

async function getBlogPostById(id) {
  const post = await BlogPost.findOne(
    { 
      where: { id },
      include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

  if (!post) return { code: 404, message: 'Post does not exist' };

  return { code: 200, data: post };
}

async function updateBlogPost(id, userId, { title, content }) {
  const getPost = await getBlogPostById(id);
  if (getPost.message) return getPost;

  if (getPost.data.userId !== userId) return { code: 401, message: 'Unauthorized user' };

  await BlogPost.update(
    {
      title, content, updated: new Date(),
    },
    { where: { id } },
  );
  
  const updatedPost = await getBlogPostById(id);

  return { code: 200, data: updatedPost.data };
}

async function deleteBlogPost(id, userId) {
  const getPost = await getBlogPostById(id);
  if (getPost.message) return getPost;

  if (getPost.data.userId !== userId) return { code: 401, message: 'Unauthorized user' };

  await BlogPost.destroy({ where: { id } });

  return { code: 204 };
}

module.exports = { addBlogPost, getBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPost };