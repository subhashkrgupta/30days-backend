import express from 'express';
import { verifyJwt } from '../middleware/verifyJwt.js';
import { createBlog, deleteBlog, getAllBlog, updateBlog } from '../controllers/blog.controller.js';


const router = express.Router();

//publoc route
router.get('/',getAllBlog)

//protected route
router.post('/',verifyJwt, createBlog);
router.put('/:id',verifyJwt,updateBlog);
router.delete('/:id',verifyJwt,deleteBlog)

export default router