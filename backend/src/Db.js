  import mongoose from 'mongoose';

  export const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/PersonalMultitools");
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  };