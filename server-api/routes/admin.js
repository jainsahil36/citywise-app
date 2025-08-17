const express = require('express');
const router = express.Router();
const { 
  getDatabaseStats, 
  getProvidersWithServiceCounts,
  getCategoriesWithCounts,
  globalSearch,
  updateProviderServiceCounts
} = require('../utils/database');

// GET /api/admin/stats - Get database statistics
router.get('/stats', async (req, res) => {
  try {
    const stats = await getDatabaseStats();
    
    res.json({
      success: true,
      data: stats,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching database stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch database statistics',
      message: error.message
    });
  }
});

// GET /api/admin/providers/top - Get top providers with service counts
router.get('/providers/top', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const providers = await getProvidersWithServiceCounts(limit);
    
    res.json({
      success: true,
      data: providers,
      count: providers.length
    });
  } catch (error) {
    console.error('Error fetching top providers:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch top providers',
      message: error.message
    });
  }
});

// GET /api/admin/categories/detailed - Get categories with counts
router.get('/categories/detailed', async (req, res) => {
  try {
    const categories = await getCategoriesWithCounts();
    
    res.json({
      success: true,
      data: categories,
      count: categories.length
    });
  } catch (error) {
    console.error('Error fetching detailed categories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch detailed categories',
      message: error.message
    });
  }
});

// GET /api/admin/search/global - Global search across all collections
router.get('/search/global', async (req, res) => {
  try {
    const { q: searchTerm, limit } = req.query;
    
    if (!searchTerm) {
      return res.status(400).json({
        success: false,
        error: 'Search term is required',
        message: 'Please provide a search term using the "q" parameter'
      });
    }
    
    const searchLimit = parseInt(limit) || 20;
    const results = await globalSearch(searchTerm, searchLimit);
    
    res.json({
      success: true,
      data: results,
      searchTerm,
      limit: searchLimit
    });
  } catch (error) {
    console.error('Error performing global search:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to perform global search',
      message: error.message
    });
  }
});

// POST /api/admin/maintenance/update-counts - Update provider service counts
router.post('/maintenance/update-counts', async (req, res) => {
  try {
    const result = await updateProviderServiceCounts();
    
    res.json({
      success: true,
      data: result,
      message: 'Provider service counts updated successfully'
    });
  } catch (error) {
    console.error('Error updating provider service counts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update provider service counts',
      message: error.message
    });
  }
});

module.exports = router;
