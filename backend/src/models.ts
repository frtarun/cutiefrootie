import mongoose from 'mongoose';

// User Model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
});

// Blog Post Model (for the blog page)
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  thumbnail: { type: String },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Project Model (for the showcase page)
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  liveUrl: { type: String, required: true },
  githubUrl: { type: String, required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// Tutorial Model (for the tutorials page)
const tutorialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Contact Form Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Image Model (for uploaded images)
const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', userSchema);
export const Blog = mongoose.model('Blog', blogSchema);
export const Project = mongoose.model('Project', projectSchema);
export const Tutorial = mongoose.model('Tutorial', tutorialSchema);
export const Contact = mongoose.model('Contact', contactSchema);
export const Image = mongoose.model('Image', imageSchema);