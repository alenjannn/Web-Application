import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { connectDB } from './config/db'; // comment this out for now
import userRoutes from './routes/userRoutes';

dotenv.config();
// connectDB(); // skip MongoDB connection temporarily

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
