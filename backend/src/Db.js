  import mongoose from 'mongoose';

  export const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://root:example@127.0.0.1:27017/PersonalMultitools?authSource=admin");
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  };