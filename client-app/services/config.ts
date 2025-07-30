// API Configuration
export const API_CONFIG = {
  // Development API URL
  DEV_BASE_URL: 'http://localhost:3000/api',
  
  // Production API URL (update this when deploying)
  PROD_BASE_URL: 'https://your-production-api.com/api',
  
  // Current environment
  IS_DEV: __DEV__ || process.env.NODE_ENV === 'development',
  
  // Get the appropriate base URL
  get BASE_URL() {
    return this.IS_DEV ? this.DEV_BASE_URL : this.PROD_BASE_URL;
  },
  
  // Request timeout
  TIMEOUT: 10000,
  
  // Default headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

export default API_CONFIG;
