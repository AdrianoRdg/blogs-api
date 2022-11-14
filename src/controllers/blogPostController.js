const service = require('../services/blogPostService');

async function addBlogPost(req, res) {
   try {
    const { userId } = req;
    const { title, content, categoryIds } = req.body;

    const { code, data } = await service.addBlogPost(
      { title, content, categoryIds, userId },
   );

    return res.status(code).json(data);
   } catch (error) {
    console.log('Algo deu errado no controller');
    return res.status(500).json({ message: error.message });
   }
}

async function getBlogPosts(req, res) {
   const { code, data } = await service.getBlogPosts();

   return res.status(code).json(data);
}

async function getBlogPostById(req, res) {
   const { id } = req.params;
   const { code, message, data } = await service.getBlogPostById(id);

   if (message) {
      return res.status(code).json({ message });
   }

   return res.status(code).json(data);
}

async function updateBlogPost(req, res) {
   const { userId } = req;
   const { id } = req.params;
   const { title, content } = req.body;
   const { code, message, data } = await service.updateBlogPost(
      id,
      userId,
      { title, content },
   );

   if (message) {
      return res.status(code).json({ message });
   }

   return res.status(code).json(data);
}

async function deleteBlogPost(req, res) {
   const { userId } = req;
   const { id } = req.params;
   const { code, message } = await service.deleteBlogPost(id, userId);

   if (message) {
      return res.status(code).json({ message });
   }

   return res.status(code).json();
}

async function searchBlogPost(req, res) {
   const { q } = req.query;
   const { code, data } = await service.searchBlogPost(q);

   return res.status(code).json(data);
}

module.exports = { 
   addBlogPost, 
   getBlogPosts,
   getBlogPostById,
   updateBlogPost,
   deleteBlogPost,
   searchBlogPost,
};