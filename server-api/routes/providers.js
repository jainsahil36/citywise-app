const express = require('express');
const router = express.Router();
const databaseService = require('../services/databaseService');

// GET /api/providers - Get all providers or filter by category
router.get('/', async (req, res) => {
  try {
    const { categoryId, search, limit, offset } = req.query;
    
    const result = await databaseService.getProviders({
      categoryId,
      search,
      limit,
      offset
    });

    res.json({
      success: true,
      data: result.data,
      pagination: result.pagination
    });
  } catch (error) {
    console.error('Error fetching providers:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch providers',
      message: error.message
    });
  }
});

// GET /api/providers/:id - Get a specific provider by ID
router.get('/:id', async (req, res) => {
  try {
    const providerId = parseInt(req.params.id);
    
    if (isNaN(providerId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid provider ID',
        message: 'Provider ID must be a number'
      });
    }

    const provider = await databaseService.getProviderById(providerId);
    
    if (!provider) {
      return res.status(404).json({
        success: false,
        error: 'Provider not found',
        message: `Provider with ID ${providerId} does not exist`
      });
    }

    res.json({
      success: true,
      data: provider
    });
  } catch (error) {
    console.error('Error fetching provider:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch provider',
      message: error.message
    });
  }
});

// GET /api/providers/:id/services - Get services for a specific provider
router.get('/:id/services', async (req, res) => {
  try {
    const providerId = parseInt(req.params.id);
    
    if (isNaN(providerId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid provider ID',
        message: 'Provider ID must be a number'
      });
    }

    // Check if provider exists
    const provider = await databaseService.getProviderById(providerId);
    
    if (!provider) {
      return res.status(404).json({
        success: false,
        error: 'Provider not found',
        message: `Provider with ID ${providerId} does not exist`
      });
    }

    // Get services for this provider
    const providerServices = await databaseService.getProviderServices(providerId);

    res.json({
      success: true,
      data: providerServices,
      count: providerServices.length,
      provider: {
        id: provider.id,
        name: provider.name,
        location: provider.location
      }
    });
  } catch (error) {
    console.error('Error fetching provider services:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch provider services',
      message: error.message
    });
  }
});

// GET /api/providers/category/:categoryId - Get providers by category ID
router.get('/category/:categoryId', async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    
    if (isNaN(categoryId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid category ID',
        message: 'Category ID must be a number'
      });
    }

    const categoryProviders = await databaseService.getProvidersByCategory(categoryId);

    res.json({
      success: true,
      data: categoryProviders,
      count: categoryProviders.length,
      categoryId: categoryId
    });
  } catch (error) {
    console.error('Error fetching providers by category:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch providers by category',
      message: error.message
    });
  }
});

module.exports = router;
