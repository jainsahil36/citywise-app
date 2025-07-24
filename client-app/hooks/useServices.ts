import { useState, useCallback } from 'react';
import type { Category, Service } from '../types';

interface UseServicesReturn {
  loading: boolean;
  error: Error | null;
  services: Service[];
  categories: Category[];
  fetchServices: (categoryId?: string) => Promise<void>;
  fetchCategories: () => Promise<void>;
}

/**
 * Hook for managing services and categories data
 * @returns {UseServicesReturn} Services and categories data with fetch methods
 */
export const useServices = (): UseServicesReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchServices = useCallback(async (categoryId?: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // TODO: Implement API call
      // For now, return mock data
      const mockServices: Service[] = [
        {
          id: '1',
          title: 'Service 1',
          categoryId: '1',
          description: 'Description 1',
        },
        {
          id: '2',
          title: 'Service 2',
          categoryId: '1',
          description: 'Description 2',
        },
      ];

      setServices(mockServices);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch services'));
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // TODO: Implement API call
      // For now, return mock data
      const mockCategories: Category[] = [
        {
          id: '1',
          name: 'Category 1',
          icon: 'home',
        },
        {
          id: '2',
          name: 'Category 2',
          icon: 'business',
        },
      ];

      setCategories(mockCategories);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch categories'));
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    services,
    categories,
    fetchServices,
    fetchCategories,
  };
};
