import express from 'express';
import mongoose from 'mongoose';
import { userRoutes } from './routes/userRoutes.js';
import { blogRoutes } from './routes/blogRoutes.js';
import { authRoutes } from './routes/authRoutes.js'; 

const app = express();

app.use(express.json());

const databaseUrl = 'mongodb+srv://Shubz:onjZhotWhOfWrJnK@cluster0.zos9sah.mongodb.net/';
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
let database = mongoose.connection;

database.on('connected', () => {
  console.log('Database connected successfully');

  app.use('/users', userRoutes);
  app.use('/blog', blogRoutes);
  app.use('/auth', authRoutes); 

  app.get('/healthcheck', (req, res) => {
    console.log('Server is running');
    res.send('Server is up and running!');
  });

  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});

database.on('error', (err) => {
  console.log('Error while connecting to the database..', err);
});
