import { NavigatorScreenParams } from '@react-navigation/native';
import type { Category, Service, Vendor, Offer } from '../types/app';

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  VendorProfile: { vendorId: number };
  ServiceDetails: { serviceId: number };
  OfferDetails: { offerId: number };
  Booking: { vendorId: number; serviceId: number };
  Chat: { vendorId: number };
  Auth: undefined;
  Settings: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Services: { category?: string };
  Bookings: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  CategoryList: undefined;
  Category: { category: Category };
  ServiceList: { categoryId: number };
  ServiceDetails: { service: Service };
  VendorList: { categoryId?: number };
  VendorProfile: { vendor: Vendor };
  OfferDetails: { offer: Offer };
};
