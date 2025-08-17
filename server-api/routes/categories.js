const express = require('express');
const router = express.Router();
const databaseService = require('../services/databaseService');

// GET /api/categories - Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await databaseService.getCategories();

    res.json({
      success: true,
      data: categories,
      count: categories.length
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories',
      message: error.message
    });
  }
});

// GET /api/categories/:id - Get a specific category by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id);
    
    if (isNaN(categoryId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid category ID',
        message: 'Category ID must be a number'
      });
    }

    const category = await databaseService.getCategoryById(categoryId);
    
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
    console.error('Error fetching category:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch category',
      message: error.message
    });
  }
});

module.exports = router;
