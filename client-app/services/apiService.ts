import { API_CONFIG } from './config';
import { ServiceCategory, ServiceProvider } from './mockData';

// HTTP Client helper
const apiClient = {
  get: async (endpoint: string) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: API_CONFIG.DEFAULT_HEADERS,
        // Add timeout support
        signal: AbortSignal.timeout(API_CONFIG.TIMEOUT)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
};

export const apiService = {
  // Get all service categories
  getCategories: async (): Promise<ServiceCategory[]> => {
    try {
      const response = await apiClient.get('/categories');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      throw new Error('Unable to load categories. Please try again later.');
    }
  },

  // Get providers for a specific category
  getProvidersByCategory: async (categoryId: number): Promise<ServiceProvider[]> => {
    try {
      const response = await apiClient.get(`/providers?categoryId=${categoryId}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch providers by category:', error);
      throw new Error('Unable to load providers. Please try again later.');
    }
  },

  // Get all providers
  getAllProviders: async (): Promise<ServiceProvider[]> => {
    try {
      const response = await apiClient.get('/providers');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch all providers:', error);
      throw new Error('Unable to load providers. Please try again later.');
    }
  },

  // Get a specific category by ID
  getCategoryById: async (id: number): Promise<ServiceCategory | undefined> => {
    try {
      const response = await apiClient.get(`/categories/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        return undefined;
      }
      console.error('Failed to fetch category:', error);
      throw new Error('Unable to load category. Please try again later.');
    }
  },

  // Get a specific provider by ID
  getProviderById: async (id: number): Promise<ServiceProvider | undefined> => {
    try {
      const response = await apiClient.get(`/providers/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        return undefined;
      }
      console.error('Failed to fetch provider:', error);
      throw new Error('Unable to load provider. Please try again later.');
    }
  },

  // Get services for a specific provider
  getProviderServices: async (providerId: number) => {
    try {
      const response = await apiClient.get(`/providers/${providerId}/services`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch provider services:', error);
      throw new Error('Unable to load services. Please try again later.');
    }
  },

  // Search providers
  searchProviders: async (searchTerm: string): Promise<ServiceProvider[]> => {
    try {
      const response = await apiClient.get(`/providers?search=${encodeURIComponent(searchTerm)}`);
      return response.data;
    } catch (error) {
      console.error('Failed to search providers:', error);
      throw new Error('Unable to search providers. Please try again later.');
    }
  }
};
