import express from 'express';
import { Blog } from '../models';
import { authenticate } from '../utils/auth';
import { AuthRequest } from '../types';

const router = express.Router();

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .populate('author', 'username');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog posts' });
  }
});

// Get single blog post
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'username');
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog post' });
  }
});

// Create blog post (protected)
router.post('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const { title, content, thumbnail, tags } = req.body;
    const blog = new Blog({
      title,
      content,
      author: req.userId,
      thumbnail,
      tags,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error creating blog post' });
  }
});

// Update blog post (protected)
router.put('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const { title, content, thumbnail, tags } = req.body;
    const blog = await Blog.findOne({
      _id: req.params.id,
      author: req.userId,
    });

    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    blog.title = title;
    blog.content = content;
    blog.thumbnail = thumbnail;
    blog.tags = tags;
    blog.updatedAt = new Date();

    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error updating blog post' });
  }
});

// Delete blog post (protected)
router.delete('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const blog = await Blog.findOneAndDelete({
      _id: req.params.id,
      author: req.userId,
    });

    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting blog post' });
  }
});

export default router;