export interface Category {
  id: number;
  name: string;
  icon: string;
  description?: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  description?: string;
  price?: number;
  rating?: number;
  category: string;
}

export interface Vendor {
  id: number;
  name: string;
  avatar?: string;
  services: Service[];
  rating: number;
  reviewCount: number;
  description?: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  discount: number;
  validUntil: string;
  service: Service;
  vendor: Vendor;
}

export interface Location {
  lat: number;
  lng: number;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  location?: Location;
  favorites: {
    vendors: number[];
    services: number[];
  };
}

export interface Booking {
  id: number;
  userId: number;
  vendorId: number;
  serviceId: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  date: string;
  time: string;
  price: number;
  payment?: {
    status: 'pending' | 'completed' | 'failed';
    method: string;
    amount: number;
  };
}

export interface ChatMessage {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: string;
  type: 'text' | 'image' | 'file';
  attachments?: {
    url: string;
    type: string;
    name: string;
  }[];
}
