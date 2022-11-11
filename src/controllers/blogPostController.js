const service = require('../services/blogPostService');

async function addBlogPost(req, res) {
   try {
    const { userId } = req;
    const { title, content, categoryIds } = req.body;
   
    const { code, data } = await service.addBlogPost(
      { 
         title, 
         content,
         categoryIds,
         userId,
      },
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

module.exports = { addBlogPost, getBlogPosts };