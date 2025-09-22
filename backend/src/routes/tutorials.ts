import express from 'express';
import { Tutorial } from '../models';
import { authenticate } from '../utils/auth';
import { AuthRequest } from '../types';

const router = express.Router();

// Get all tutorials
router.get('/', async (req, res) => {
  try {
    const tutorials = await Tutorial.find().sort({ createdAt: -1 });
    res.json(tutorials);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tutorials' });
  }
});

// Get single tutorial
router.get('/:id', async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) {
      return res.status(404).json({ error: 'Tutorial not found' });
    }
    res.json(tutorial);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tutorial' });
  }
});

// Create tutorial (protected)
router.post('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const { title, description, videoUrl } = req.body;
    const tutorial = new Tutorial({
      title,
      description,
      videoUrl,
    });
    await tutorial.save();
    res.status(201).json(tutorial);
  } catch (error) {
    res.status(500).json({ error: 'Error creating tutorial' });
  }
});

// Update tutorial (protected)
router.put('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) {
      return res.status(404).json({ error: 'Tutorial not found' });
    }

    const { title, description, videoUrl } = req.body;
    tutorial.title = title;
    tutorial.description = description;
    tutorial.videoUrl = videoUrl;

    await tutorial.save();
    res.json(tutorial);
  } catch (error) {
    res.status(500).json({ error: 'Error updating tutorial' });
  }
});

// Delete tutorial (protected)
router.delete('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const tutorial = await Tutorial.findByIdAndDelete(req.params.id);
    if (!tutorial) {
      return res.status(404).json({ error: 'Tutorial not found' });
    }
    res.json({ message: 'Tutorial deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting tutorial' });
  }
});

export default router;