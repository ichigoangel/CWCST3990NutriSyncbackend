// server.js - Main server configuration
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './config/dbconfig.js';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import mealRoutes from './routes/mealRoutes.js';
import yogaRoutes from './routes/yogaRoutes.js';
import trackingRoutes from './routes/trackingRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/yoga', yogaRoutes);
app.use('/api/tracking', trackingRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});