import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure storage for multer using cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      public_id: `portfolio/${Date.now()}-${file.originalname}`,
      format: file.mimetype.split('/')[1],
      resource_type: 'auto'
    };
  }
});

export const upload = multer({ storage });

// Helper function to handle file uploads to cloudinary
export const uploadToCloudinary = async (file: Express.Multer.File) => {
  try {
    const result = await cloudinary.uploader.upload(file.path);
    return result.secure_url;
  } catch (error) {
    throw new Error('Error uploading file to Cloudinary');
  }
};