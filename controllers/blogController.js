import { BlogPost } from '../models/blogPost.js';

const createBlogPost = async (req, res) => {
  try {
    const newBlogPost = new BlogPost(req.body);
    const savedBlogPost = await newBlogPost.save();
    res.status(201).json(savedBlogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createBlogPost };
