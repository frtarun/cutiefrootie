import express from 'express';
import { Contact } from '../models';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({
      name,
      email,
      message,
    });
    await contact.save();
    
    // Here you could add email notification logic
    // using nodemailer or similar service
    
    res.status(201).json({
      message: 'Message sent successfully',
      contact,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error sending message' });
  }
});

export default router;