const express = require('express');
const router = express.Router();
const { providers, serviceItems } = require('../data/mockData');

// GET /api/providers - Get all providers or filter by category
router.get('/', (req, res) => {
  try {
    const { categoryId, search, limit, offset } = req.query;
    let filteredProviders = [...providers];

    // Filter by category if provided
    if (categoryId) {
      const catId = parseInt(categoryId);
      if (!isNaN(catId)) {
        filteredProviders = filteredProviders.filter(provider => provider.categoryId === catId);
      }
    }

    // Search functionality
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredProviders = filteredProviders.filter(provider =>
        provider.name.toLowerCase().includes(searchTerm) ||
        provider.location.toLowerCase().includes(searchTerm) ||
        provider.description?.toLowerCase().includes(searchTerm)
      );
    }

    // Pagination
    const totalCount = filteredProviders.length;
    const startIndex = offset ? parseInt(offset) : 0;
    const endIndex = limit ? startIndex + parseInt(limit) : filteredProviders.length;
    
    if (limit || offset) {
      filteredProviders = filteredProviders.slice(startIndex, endIndex);
    }

    res.json({
      success: true,
      data: filteredProviders,
      pagination: {
        total: totalCount,
        count: filteredProviders.length,
        offset: startIndex,
        limit: limit ? parseInt(limit) : totalCount
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch providers',
      message: error.message
    });
  }
});

// GET /api/providers/:id - Get a specific provider by ID
router.get('/:id', (req, res) => {
  try {
    const providerId = parseInt(req.params.id);
    
    if (isNaN(providerId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid provider ID',
        message: 'Provider ID must be a number'
      });
    }

    const provider = providers.find(prov => prov.id === providerId);
    
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
    res.status(500).json({
      success: false,
      error: 'Failed to fetch provider',
      message: error.message
    });
  }
});

// GET /api/providers/:id/services - Get services for a specific provider
router.get('/:id/services', (req, res) => {
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
    const provider = providers.find(prov => prov.id === providerId);
    if (!provider) {
      return res.status(404).json({
        success: false,
        error: 'Provider not found',
        message: `Provider with ID ${providerId} does not exist`
      });
    }

    // Get services for this provider
    const providerServices = serviceItems.filter(service => service.providerId === providerId);

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
    res.status(500).json({
      success: false,
      error: 'Failed to fetch provider services',
      message: error.message
    });
  }
});

// GET /api/providers/category/:categoryId - Get providers by category ID
router.get('/category/:categoryId', (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    
    if (isNaN(categoryId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid category ID',
        message: 'Category ID must be a number'
      });
    }

    const categoryProviders = providers.filter(provider => provider.categoryId === categoryId);

    res.json({
      success: true,
      data: categoryProviders,
      count: categoryProviders.length,
      categoryId: categoryId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch providers by category',
      message: error.message
    });
  }
});

module.exports = router;
