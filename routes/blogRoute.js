const express = require('express');
const { getAllblogs, getBlogsByAuthorEmail, addBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

const router = express.Router();

router.get('/', getAllblogs);
router.get('/:email', getBlogsByAuthorEmail);
router.post('/', addBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;