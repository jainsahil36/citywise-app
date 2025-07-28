/**
 * Global type definitions for the CityWise application
 */

// Navigation Types
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Services: { categoryId: string };
  ServiceDetails: { serviceId: string };
  VendorProfile: { vendorId: string };
  OfferDetails: { offerId: string };
  Booking: { vendorId: string; serviceId: string };
  Chat: { vendorId: string };
};

// Data Types
export interface Category {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description?: string;
  categoryId: string;
  price?: number;
  rating?: number;
  image?: string;
}

// Component Props Types
export interface BaseComponentProps {
  testID?: string;
  style?: any;
  children?: React.ReactNode;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  border: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  page: number;
  totalPages: number;
  totalItems: number;
}
