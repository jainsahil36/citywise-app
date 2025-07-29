import { mockCategories, mockProviders, ServiceCategory, ServiceProvider } from './mockData';

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
  // Get all service categories
  getCategories: async (): Promise<ServiceCategory[]> => {
    await delay(500); // Simulate network delay
    return Promise.resolve(mockCategories);
  },

  // Get providers for a specific category
  getProvidersByCategory: async (categoryId: number): Promise<ServiceProvider[]> => {
    await delay(500);
    const providers = mockProviders.filter(provider => provider.categoryId === categoryId);
    return Promise.resolve(providers);
  },

  // Get all providers
  getAllProviders: async (): Promise<ServiceProvider[]> => {
    await delay(500);
    return Promise.resolve(mockProviders);
  },

  // Get a specific category by ID
  getCategoryById: async (id: number): Promise<ServiceCategory | undefined> => {
    await delay(300);
    const category = mockCategories.find(cat => cat.id === id);
    return Promise.resolve(category);
  },

  // Get a specific provider by ID
  getProviderById: async (id: number): Promise<ServiceProvider | undefined> => {
    await delay(300);
    const provider = mockProviders.find(prov => prov.id === id);
    return Promise.resolve(provider);
  }
};
