import express from 'express';
import { User } from '../models';
import { generateToken, hashPassword, comparePasswords, authenticate } from '../utils/auth';
import { AuthRequest } from '../types';

const router = express.Router();

// Register new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password and create user
    const hashedPassword = await hashPassword(password);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    const token = generateToken(user._id.toString());

    res.status(201).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isValidPassword = await comparePasswords(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token and send response
    const token = generateToken(user._id.toString());
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Get current user
router.get('/me', authenticate, async (req: AuthRequest, res) => {
  try {
    const user = req.user;
    res.json({
      user: {
        id: user?._id,
        username: user?.username,
        email: user?.email,
        role: user?.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user data' });
  }
});

export default router;