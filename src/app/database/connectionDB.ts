import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://elfit12345:elfit12345@crud.vgwhvmn.mongodb.net/constructionTable?retryWrites=true&w=majority'
    // { useNewUrlParser: true }
  );
  console.log('database connected');
};
