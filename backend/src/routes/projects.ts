import express from 'express';
import { Project } from '../models';
import { authenticate } from '../utils/auth';
import { AuthRequest } from '../types';
import { upload } from '../utils/upload';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

// Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching project' });
  }
});

// Create project (protected)
router.post('/', authenticate, upload.single('image'), async (req: AuthRequest, res) => {
  try {
    const { title, description, liveUrl, githubUrl, tags } = req.body;
    const imageUrl = req.file?.path;

    if (!imageUrl) {
      return res.status(400).json({ error: 'Image is required' });
    }

    const project = new Project({
      title,
      description,
      imageUrl,
      liveUrl,
      githubUrl,
      tags: tags ? JSON.parse(tags) : [],
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error creating project' });
  }
});

// Update project (protected)
router.put('/:id', authenticate, upload.single('image'), async (req: AuthRequest, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const { title, description, liveUrl, githubUrl, tags } = req.body;
    const imageUrl = req.file?.path;

    project.title = title;
    project.description = description;
    project.liveUrl = liveUrl;
    project.githubUrl = githubUrl;
    project.tags = tags ? JSON.parse(tags) : project.tags;
    if (imageUrl) {
      project.imageUrl = imageUrl;
    }

    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error updating project' });
  }
});

// Delete project (protected)
router.delete('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting project' });
  }
});

export default router;