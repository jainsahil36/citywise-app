const { Category, Provider, ServiceItem } = require('../models');

/**
 * Database utility functions
 */

/**
 * Get statistics about the database
 */
const getDatabaseStats = async () => {
  try {
    const stats = {
      categories: await Category.countDocuments({ isActive: true }),
      providers: await Provider.countDocuments({ isActive: true }),
      serviceItems: await ServiceItem.countDocuments({ isActive: true }),
      totalProviders: await Provider.countDocuments(),
      totalServiceItems: await ServiceItem.countDocuments(),
      newProviders: await Provider.countDocuments({ isNew: true, isActive: true })
    };
    
    return stats;
  } catch (error) {
    throw new Error(`Failed to get database stats: ${error.message}`);
  }
};

/**
 * Get providers with their service counts
 */
const getProvidersWithServiceCounts = async (limit = 10) => {
  try {
    const providers = await Provider.aggregate([
      { $match: { isActive: true } },
      {
        $lookup: {
          from: 'serviceitems',
          localField: 'id',
          foreignField: 'providerId',
          as: 'services'
        }
      },
      {
        $addFields: {
          serviceCount: { $size: '$services' }
        }
      },
      { $sort: { rating: -1, serviceCount: -1 } },
      { $limit: limit },
      {
        $project: {
          _id: 0,
          __v: 0,
          services: 0
        }
      }
    ]);
    
    return providers;
  } catch (error) {
    throw new Error(`Failed to get providers with service counts: ${error.message}`);
  }
};

/**
 * Get category with provider and service counts
 */
const getCategoriesWithCounts = async () => {
  try {
    const categories = await Category.aggregate([
      { $match: { isActive: true } },
      {
        $lookup: {
          from: 'providers',
          localField: 'id',
          foreignField: 'categoryId',
          as: 'providers'
        }
      },
      {
        $addFields: {
          providerCount: { $size: '$providers' },
          activeProviderCount: {
            $size: {
              $filter: {
                input: '$providers',
                cond: { $eq: ['$$this.isActive', true] }
              }
            }
          }
        }
      },
      { $sort: { id: 1 } },
      {
        $project: {
          _id: 0,
          __v: 0,
          providers: 0
        }
      }
    ]);
    
    return categories;
  } catch (error) {
    throw new Error(`Failed to get categories with counts: ${error.message}`);
  }
};

/**
 * Search across all collections
 */
const globalSearch = async (searchTerm, limit = 20) => {
  try {
    const [categories, providers, services] = await Promise.all([
      Category.find(
        { 
          $text: { $search: searchTerm },
          isActive: true 
        },
        { score: { $meta: 'textScore' } }
      )
      .sort({ score: { $meta: 'textScore' } })
      .limit(limit)
      .lean(),
      
      Provider.find(
        { 
          $text: { $search: searchTerm },
          isActive: true 
        },
        { score: { $meta: 'textScore' } }
      )
      .sort({ score: { $meta: 'textScore' } })
      .limit(limit)
      .lean(),
      
      ServiceItem.find(
        { 
          $text: { $search: searchTerm },
          isActive: true 
        },
        { score: { $meta: 'textScore' } }
      )
      .sort({ score: { $meta: 'textScore' } })
      .limit(limit)
      .lean()
    ]);
    
    return {
      categories,
      providers,
      services,
      total: categories.length + providers.length + services.length
    };
  } catch (error) {
    throw new Error(`Failed to perform global search: ${error.message}`);
  }
};

/**
 * Update provider service counts
 */
const updateProviderServiceCounts = async () => {
  try {
    const providers = await Provider.find({ isActive: true });
    
    for (const provider of providers) {
      const serviceCount = await ServiceItem.countDocuments({
        providerId: provider.id,
        isActive: true
      });
      
      await Provider.updateOne(
        { id: provider.id },
        { totalServices: serviceCount }
      );
    }
    
    return { updated: providers.length };
  } catch (error) {
    throw new Error(`Failed to update provider service counts: ${error.message}`);
  }
};

module.exports = {
  getDatabaseStats,
  getProvidersWithServiceCounts,
  getCategoriesWithCounts,
  globalSearch,
  updateProviderServiceCounts
};
