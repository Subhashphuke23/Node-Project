import express from 'express';
import { createBlogPost } from '../controllers/blogController.js';

const router = express.Router();

router.post('/create', createBlogPost);

export { router as blogRoutes };
