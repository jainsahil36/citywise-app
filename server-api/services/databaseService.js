const { Category, Provider, ServiceItem } = require('../models');
const { categories, providers, serviceItems } = require('../data/mockData');

/**
 * Database service that can fallback to mock data when database is not available
 */
class DatabaseService {
  constructor() {
    this.isConnected = false;
    this.checkConnection();
  }

  async checkConnection() {
    try {
      // Try to ping the database
      await Category.findOne().limit(1);
      this.isConnected = true;
      console.log('📊 Database service: Using MongoDB');
    } catch (error) {
      this.isConnected = false;
      console.log('⚠️ Database service: Falling back to mock data');
      console.log('💡 To use MongoDB, please run: npm run seed (after setting up MongoDB)');
    }
  }

  async getCategories() {
    if (this.isConnected) {
      return await Category.find({ isActive: true }).sort({ id: 1 }).lean();
    }
    return categories;
  }

  async getCategoryById(id) {
    if (this.isConnected) {
      return await Category.findOne({ id: id, isActive: true }).lean();
    }
    return categories.find(cat => cat.id === id);
  }

  async getProviders(query = {}) {
    if (this.isConnected) {
      const { categoryId, search, limit, offset } = query;
      
      let dbQuery = { isActive: true };
      
      if (categoryId) {
        dbQuery.categoryId = parseInt(categoryId);
      }

      if (search) {
        dbQuery.$text = { $search: search };
      }

      const totalCount = await Provider.countDocuments(dbQuery);
      
      let providersQuery = Provider.find(dbQuery);

      if (search) {
        providersQuery = providersQuery
          .select({ score: { $meta: 'textScore' } })
          .sort({ score: { $meta: 'textScore' }, rating: -1 });
      } else {
        providersQuery = providersQuery.sort({ rating: -1, id: 1 });
      }

      const startIndex = offset ? parseInt(offset) : 0;
      const limitValue = limit ? parseInt(limit) : undefined;
      
      if (limitValue) {
        providersQuery = providersQuery.skip(startIndex).limit(limitValue);
      } else if (startIndex > 0) {
        providersQuery = providersQuery.skip(startIndex);
      }

      const results = await providersQuery.lean();
      
      return {
        data: results,
        pagination: {
          total: totalCount,
          count: results.length,
          offset: startIndex,
          limit: limitValue || totalCount
        }
      };
    }

    // Fallback to mock data
    const { categoryId, search, limit, offset } = query;
    let filteredProviders = [...providers];

    if (categoryId) {
      const catId = parseInt(categoryId);
      if (!isNaN(catId)) {
        filteredProviders = filteredProviders.filter(provider => provider.categoryId === catId);
      }
    }

    if (search) {
      const searchTerm = search.toLowerCase();
      filteredProviders = filteredProviders.filter(provider =>
        provider.name.toLowerCase().includes(searchTerm) ||
        provider.location.toLowerCase().includes(searchTerm) ||
        provider.description?.toLowerCase().includes(searchTerm)
      );
    }

    const totalCount = filteredProviders.length;
    const startIndex = offset ? parseInt(offset) : 0;
    const endIndex = limit ? startIndex + parseInt(limit) : filteredProviders.length;
    
    if (limit || offset) {
      filteredProviders = filteredProviders.slice(startIndex, endIndex);
    }

    return {
      data: filteredProviders,
      pagination: {
        total: totalCount,
        count: filteredProviders.length,
        offset: startIndex,
        limit: limit ? parseInt(limit) : totalCount
      }
    };
  }

  async getProviderById(id) {
    if (this.isConnected) {
      return await Provider.findOne({ id: id, isActive: true }).lean();
    }
    return providers.find(prov => prov.id === id);
  }

  async getProviderServices(providerId) {
    if (this.isConnected) {
      return await ServiceItem.find({ 
        providerId: providerId, 
        isActive: true 
      }).sort({ name: 1 }).lean();
    }
    return serviceItems.filter(service => service.providerId === providerId);
  }

  async getProvidersByCategory(categoryId) {
    if (this.isConnected) {
      return await Provider.find({ 
        categoryId: categoryId, 
        isActive: true 
      }).sort({ rating: -1, id: 1 }).lean();
    }
    return providers.filter(provider => provider.categoryId === categoryId);
  }
}

module.exports = new DatabaseService();
