const express = require('express');
const router = express.Router();
const { categories } = require('../data/mockData');

// GET /api/categories - Get all categories
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: categories,
      count: categories.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories',
      message: error.message
    });
  }
});

// GET /api/categories/:id - Get a specific category by ID
router.get('/:id', (req, res) => {
  try {
    const categoryId = parseInt(req.params.id);
    
    if (isNaN(categoryId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid category ID',
        message: 'Category ID must be a number'
      });
    }

    const category = categories.find(cat => cat.id === categoryId);
    
    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found',
        message: `Category with ID ${categoryId} does not exist`
      });
    }

    res.json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch category',
      message: error.message
    });
  }
});

module.exports = router;
