import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Successfully connected to MongoDB!');
    await mongoose.connection.close();
    console.log('Connection closed.');
  } catch (error) {
    console.error('Connection error:', error);
  }
};

testConnection();