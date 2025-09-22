import { Request } from 'express';
import { Document } from 'mongoose';

// User Interface
export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

// Blog Interface
export interface IBlog extends Document {
  title: string;
  content: string;
  author: IUser['_id'];
  thumbnail?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Project Interface
export interface IProject extends Document {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  createdAt: Date;
}

// Tutorial Interface
export interface ITutorial extends Document {
  title: string;
  description: string;
  videoUrl: string;
  createdAt: Date;
}

// Contact Interface
export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Image Interface
export interface IImage extends Document {
  url: string;
  userId: IUser['_id'];
  title?: string;
  createdAt: Date;
}

// Extended Request Interface with User
export interface AuthRequest extends Request {
  user?: IUser;
  userId?: string;
}