import express from 'express';
import { Image } from '../models';
import { authenticate } from '../utils/auth';
import { AuthRequest } from '../types';
import { upload } from '../utils/upload';

const router = express.Router();

// Get all images (with optional user filter)
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    const query = userId ? { userId } : {};
    const images = await Image.find(query).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching images' });
  }
});

// Upload image (protected)
router.post('/', authenticate, upload.single('image'), async (req: AuthRequest, res) => {
  try {
    const { title } = req.body;
    const imageUrl = req.file?.path;

    if (!imageUrl) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const image = new Image({
      url: imageUrl,
      userId: req.userId,
      title,
    });

    await image.save();
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ error: 'Error uploading image' });
  }
});

// Delete image (protected)
router.delete('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const image = await Image.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Here you could add logic to delete the image from Cloudinary
    // using cloudinary.uploader.destroy()

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting image' });
  }
});

export default router;