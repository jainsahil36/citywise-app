const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// Import database connection
const { connectDB } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (optional - will fallback to mock data if fails)
connectDB().catch(error => {
  console.log('⚠️ Database connection failed, using mock data mode');
  console.log('💡 To use MongoDB, please set up your database and run: npm run seed');
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const categoriesRoutes = require('./routes/categories');
const providersRoutes = require('./routes/providers');
const adminRoutes = require('./routes/admin');

// Routes
app.use('/api/categories', categoriesRoutes);
app.use('/api/providers', providersRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'CityWise API Server is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to CityWise API Server',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      categories: '/api/categories',
      providers: '/api/providers'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 CityWise API Server is running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📋 Categories: http://localhost:${PORT}/api/categories`);
  console.log(`🏪 Providers: http://localhost:${PORT}/api/providers`);
});

module.exports = app;
