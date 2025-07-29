export interface ServiceCategory {
  id: number;
  name: string;
  icon: string;
  description: string;
  image?: string;
}

export interface ServiceProvider {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  categoryId: number;
  phone?: string;
  description?: string;
  isNew?: boolean;
}

export const mockCategories: ServiceCategory[] = [
  {
    id: 1,
    name: "Financial Consulting",
    icon: "calculator",
    description: "Expert financial advice and planning services",
    image: "https://via.placeholder.com/150x100/21375B/FFFFFF?text=Financial"
  },
  {
    id: 2,
    name: "Legal Services",
    icon: "gavel",
    description: "Professional legal consultation and services",
    image: "https://via.placeholder.com/150x100/A3C2E4/21375B?text=Legal"
  },
  {
    id: 3,
    name: "Healthcare",
    icon: "medical",
    description: "Medical consultations and health services",
    image: "https://via.placeholder.com/150x100/008CBA/FFFFFF?text=Healthcare"
  },
  {
    id: 4,
    name: "Construction",
    icon: "hammer",
    description: "Building and construction services",
    image: "https://via.placeholder.com/150x100/21375B/FFFFFF?text=Construction"
  },
  {
    id: 5,
    name: "Automobile",
    icon: "car",
    description: "Vehicle maintenance and repair services",
    image: "https://via.placeholder.com/150x100/A3C2E4/21375B?text=Auto"
  },
  {
    id: 6,
    name: "Hardware",
    icon: "hardware-chip",
    description: "Technical hardware solutions and repairs",
    image: "https://via.placeholder.com/150x100/008CBA/FFFFFF?text=Hardware"
  }
];

export const mockProviders: ServiceProvider[] = [
  // Financial Consulting Providers
  {
    id: 1,
    name: "ACE CONSORTIUM",
    location: "ACE Consortium, Sethi Enclave",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=building",
    rating: 4.8,
    categoryId: 1,
    phone: "+91-9876543210",
    description: "Professional financial consulting and investment advisory services",
    isNew: true
  },
  {
    id: 2,
    name: "KNG TECH STRUCTURAL ENGINEERS",
    location: "Haus Khas, New Delhi, Delhi",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=building",
    rating: 4.9,
    categoryId: 4,
    phone: "+91-9876543211",
    description: "Structural engineering and construction consulting",
    isNew: true
  },
  {
    id: 3,
    name: "Dharma Consulting",
    location: "By Mayank Uppal, Delhi",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=building",
    rating: 4.6,
    categoryId: 1,
    phone: "+91-9876543212",
    description: "Business consulting and financial advisory services",
    isNew: true
  },
  {
    id: 4,
    name: "Legal Eagles Associates",
    location: "Connaught Place, Delhi",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=building",
    rating: 4.7,
    categoryId: 2,
    phone: "+91-9876543213",
    description: "Expert legal consultation for all your needs"
  },
  {
    id: 5,
    name: "City Healthcare Center",
    location: "Koramangala, Bangalore",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop&crop=building",
    rating: 4.9,
    categoryId: 3,
    phone: "+91-9876543214",
    description: "Quality healthcare services at your doorstep"
  },
  {
    id: 6,
    name: "AutoCare Solutions",
    location: "Sector 18, Gurgaon",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop&crop=building",
    rating: 4.5,
    categoryId: 5,
    phone: "+91-9876543215",
    description: "Complete automobile maintenance and repair services"
  },
  {
    id: 7,
    name: "TechFix Hardware",
    location: "Cyber City, Gurgaon",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&crop=building",
    rating: 4.4,
    categoryId: 6,
    phone: "+91-9876543216",
    description: "Technical hardware solutions and computer repairs"
  }
];
