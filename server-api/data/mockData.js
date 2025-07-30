// Service categories data
const categories = [
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

// Service providers data
const providers = [
  // Financial Consulting Providers (Category 1)
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
    id: 8,
    name: "Wealth Advisors Pro",
    location: "Connaught Place, New Delhi",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=building",
    rating: 4.7,
    categoryId: 1,
    phone: "+91-9876543217",
    description: "Expert wealth management and financial planning services",
    isNew: false
  },
  {
    id: 9,
    name: "FinTech Solutions Hub",
    location: "Bandra, Mumbai",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=building",
    rating: 4.9,
    categoryId: 1,
    phone: "+91-9876543218",
    description: "Modern fintech solutions and digital financial advisory",
    isNew: true
  },

  // Legal Services Providers (Category 2)
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
    id: 10,
    name: "Supreme Law Chambers",
    location: "Saket, New Delhi",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop&crop=building",
    rating: 4.8,
    categoryId: 2,
    phone: "+91-9876543219",
    description: "Top-tier legal services for corporate and individual clients"
  },
  {
    id: 11,
    name: "Justice Legal Services",
    location: "Andheri, Mumbai",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop&crop=building",
    rating: 4.5,
    categoryId: 2,
    phone: "+91-9876543220",
    description: "Comprehensive legal support for all types of cases",
    isNew: true
  },
  {
    id: 12,
    name: "Metropolitan Law Firm",
    location: "Electronic City, Bangalore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=building",
    rating: 4.6,
    categoryId: 2,
    phone: "+91-9876543221",
    description: "Modern law firm specializing in technology and startup law"
  },

  // Healthcare Providers (Category 3)
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
    id: 13,
    name: "Prime Medical Clinic",
    location: "Whitefield, Bangalore",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=300&h=200&fit=crop&crop=building",
    rating: 4.7,
    categoryId: 3,
    phone: "+91-9876543222",
    description: "Advanced medical care with experienced doctors",
    isNew: true
  },
  {
    id: 14,
    name: "Health Plus Diagnostics",
    location: "Gurgaon Sector 29",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=building",
    rating: 4.8,
    categoryId: 3,
    phone: "+91-9876543223",
    description: "Complete diagnostic services and health checkups"
  },
  {
    id: 15,
    name: "Wellness Care Hospital",
    location: "Powai, Mumbai",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=building",
    rating: 4.6,
    categoryId: 3,
    phone: "+91-9876543224",
    description: "Holistic healthcare approach with modern facilities"
  },

  // Construction Providers (Category 4)
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
    id: 16,
    name: "BuildRight Construction",
    location: "Noida Sector 62",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=200&fit=crop&crop=building",
    rating: 4.5,
    categoryId: 4,
    phone: "+91-9876543225",
    description: "Complete construction solutions for residential and commercial projects"
  },
  {
    id: 17,
    name: "Elite Architects & Builders",
    location: "Banjara Hills, Hyderabad",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop&crop=building",
    rating: 4.7,
    categoryId: 4,
    phone: "+91-9876543226",
    description: "Premium architectural design and construction services",
    isNew: true
  },
  {
    id: 18,
    name: "ModernBuild Solutions",
    location: "Salt Lake, Kolkata",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=building",
    rating: 4.4,
    categoryId: 4,
    phone: "+91-9876543227",
    description: "Innovative construction techniques and sustainable building solutions"
  },

  // Automobile Providers (Category 5)
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
    id: 19,
    name: "SpeedFix Auto Workshop",
    location: "Malleshwaram, Bangalore",
    image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=300&h=200&fit=crop&crop=building",
    rating: 4.6,
    categoryId: 5,
    phone: "+91-9876543228",
    description: "Quick and reliable auto repair services for all vehicle types",
    isNew: true
  },
  {
    id: 20,
    name: "Premium Car Care",
    location: "Andheri West, Mumbai",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=building",
    rating: 4.8,
    categoryId: 5,
    phone: "+91-9876543229",
    description: "Luxury car maintenance and detailing services"
  },
  {
    id: 21,
    name: "AutoTech Garage",
    location: "Rajouri Garden, Delhi",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=300&h=200&fit=crop&crop=building",
    rating: 4.3,
    categoryId: 5,
    phone: "+91-9876543230",
    description: "Advanced automotive technology and repair solutions"
  },

  // Hardware Providers (Category 6)
  {
    id: 7,
    name: "TechFix Hardware",
    location: "Cyber City, Gurgaon",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&crop=building",
    rating: 4.4,
    categoryId: 6,
    phone: "+91-9876543216",
    description: "Technical hardware solutions and computer repairs"
  },
  {
    id: 22,
    name: "Digital Solutions Hub",
    location: "Electronic City, Bangalore",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop&crop=building",
    rating: 4.7,
    categoryId: 6,
    phone: "+91-9876543231",
    description: "Complete IT hardware solutions and enterprise services",
    isNew: true
  },
  {
    id: 23,
    name: "PC Care Center",
    location: "Nehru Place, Delhi",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=building",
    rating: 4.5,
    categoryId: 6,
    phone: "+91-9876543232",
    description: "Professional PC and laptop repair services"
  },
  {
    id: 24,
    name: "Smart Tech Solutions",
    location: "Hitech City, Hyderabad",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=building",
    rating: 4.6,
    categoryId: 6,
    phone: "+91-9876543233",
    description: "Smart technology integration and hardware consultation"
  }
];

// Service items for each provider (can be expanded later)
const serviceItems = [
  // ACE CONSORTIUM (Financial Consulting) - Provider ID 1
  {
    id: 1,
    name: 'Mutual Funds & Investment Planning',
    price: 1500,
    duration: '1hour',
    category: 'Financial consulting',
    description: 'Professional mutual fund advisory and investment planning services',
    providerId: 1
  },
  {
    id: 2,
    name: 'Tax Planning & Filing',
    price: 2000,
    duration: '2hours',
    category: 'Financial consulting',
    description: 'Complete tax planning and filing assistance',
    providerId: 1
  },
  {
    id: 3,
    name: 'Retirement Planning',
    price: 2500,
    duration: '1.5hours',
    category: 'Financial consulting',
    description: 'Comprehensive retirement planning consultation',
    providerId: 1
  },
  {
    id: 4,
    name: 'Insurance Advisory',
    price: 1200,
    duration: '45min',
    category: 'Insurance Services',
    description: 'Life and health insurance advisory services',
    providerId: 1
  },
  
  // KNG TECH STRUCTURAL ENGINEERS (Construction) - Provider ID 2
  {
    id: 5,
    name: 'Structural Design Analysis',
    price: 5000,
    duration: '3hours',
    category: 'Construction',
    description: 'Complete structural analysis and design consultation',
    providerId: 2
  },
  {
    id: 6,
    name: 'Building Safety Inspection',
    price: 3000,
    duration: '2hours',
    category: 'Construction',
    description: 'Comprehensive building safety and compliance inspection',
    providerId: 2
  },
  {
    id: 7,
    name: 'Project Planning & Management',
    price: 8000,
    duration: '4hours',
    category: 'Construction',
    description: 'End-to-end construction project planning and management',
    providerId: 2
  },

  // Dharma Consulting (Financial Consulting) - Provider ID 3
  {
    id: 8,
    name: 'Business Strategy Consultation',
    price: 3500,
    duration: '2hours',
    category: 'Financial consulting',
    description: 'Strategic business planning and growth consultation',
    providerId: 3
  },
  {
    id: 9,
    name: 'Financial Risk Assessment',
    price: 2800,
    duration: '1.5hours',
    category: 'Financial consulting',
    description: 'Comprehensive financial risk analysis and mitigation strategies',
    providerId: 3
  },

  // Legal Eagles Associates (Legal Services) - Provider ID 4
  {
    id: 10,
    name: 'Legal Document Review',
    price: 2000,
    duration: '1hour',
    category: 'Legal Services',
    description: 'Professional review of contracts and legal documents',
    providerId: 4
  },
  {
    id: 11,
    name: 'Business Law Consultation',
    price: 3000,
    duration: '1.5hours',
    category: 'Legal Services',
    description: 'Expert guidance on business law and corporate matters',
    providerId: 4
  },
  {
    id: 12,
    name: 'Property Law Services',
    price: 2500,
    duration: '1hour',
    category: 'Legal Services',
    description: 'Comprehensive property law consultation and documentation',
    providerId: 4
  },

  // City Healthcare Center (Healthcare) - Provider ID 5
  {
    id: 13,
    name: 'General Health Checkup',
    price: 800,
    duration: '45min',
    category: 'Healthcare',
    description: 'Complete general health examination and consultation',
    providerId: 5
  },
  {
    id: 14,
    name: 'Specialized Consultation',
    price: 1500,
    duration: '30min',
    category: 'Healthcare',
    description: 'Expert consultation with specialized medical professionals',
    providerId: 5
  },
  {
    id: 15,
    name: 'Health Screening Package',
    price: 2500,
    duration: '2hours',
    category: 'Healthcare',
    description: 'Comprehensive health screening and diagnostic package',
    providerId: 5
  },

  // AutoCare Solutions (Automobile) - Provider ID 6
  {
    id: 16,
    name: 'Vehicle Maintenance Service',
    price: 1200,
    duration: '2hours',
    category: 'Automobile',
    description: 'Regular vehicle maintenance and servicing',
    providerId: 6
  },
  {
    id: 17,
    name: 'Engine Diagnostic & Repair',
    price: 2500,
    duration: '3hours',
    category: 'Automobile',
    description: 'Complete engine diagnostic and repair services',
    providerId: 6
  },
  {
    id: 18,
    name: 'AC System Service',
    price: 800,
    duration: '1hour',
    category: 'Automobile',
    description: 'Air conditioning system check and service',
    providerId: 6
  },

  // TechFix Hardware (Hardware) - Provider ID 7
  {
    id: 19,
    name: 'Computer Repair Service',
    price: 1000,
    duration: '1.5hours',
    category: 'Hardware',
    description: 'Professional computer hardware repair and maintenance',
    providerId: 7
  },
  {
    id: 20,
    name: 'Network Setup & Configuration',
    price: 1800,
    duration: '2hours',
    category: 'Hardware',
    description: 'Complete network setup and configuration services',
    providerId: 7
  },
  {
    id: 21,
    name: 'Data Recovery Service',
    price: 2200,
    duration: '2hours',
    category: 'Hardware',
    description: 'Professional data recovery from damaged storage devices',
    providerId: 7
  },

  // Wealth Advisors Pro (Financial Consulting) - Provider ID 8
  {
    id: 22,
    name: 'Portfolio Management',
    price: 4000,
    duration: '2hours',
    category: 'Financial consulting',
    description: 'Professional portfolio management and optimization',
    providerId: 8
  },
  {
    id: 23,
    name: 'Estate Planning',
    price: 3500,
    duration: '1.5hours',
    category: 'Financial consulting',
    description: 'Comprehensive estate planning and wealth transfer strategies',
    providerId: 8
  },

  // FinTech Solutions Hub (Financial Consulting) - Provider ID 9
  {
    id: 24,
    name: 'Digital Investment Platform Setup',
    price: 2500,
    duration: '1hour',
    category: 'Financial consulting',
    description: 'Setup and guidance for digital investment platforms',
    providerId: 9
  },
  {
    id: 25,
    name: 'Cryptocurrency Advisory',
    price: 3000,
    duration: '1.5hours',
    category: 'Financial consulting',
    description: 'Expert guidance on cryptocurrency investments and trading',
    providerId: 9
  },

  // Supreme Law Chambers (Legal Services) - Provider ID 10
  {
    id: 26,
    name: 'Corporate Law Advisory',
    price: 4000,
    duration: '2hours',
    category: 'Legal Services',
    description: 'High-level corporate law consultation and advisory',
    providerId: 10
  },
  {
    id: 27,
    name: 'Merger & Acquisition Support',
    price: 5000,
    duration: '3hours',
    category: 'Legal Services',
    description: 'Legal support for mergers, acquisitions, and restructuring',
    providerId: 10
  },

  // Justice Legal Services (Legal Services) - Provider ID 11
  {
    id: 28,
    name: 'Criminal Law Defense',
    price: 3500,
    duration: '2hours',
    category: 'Legal Services',
    description: 'Expert criminal law defense and representation',
    providerId: 11
  },
  {
    id: 29,
    name: 'Family Law Consultation',
    price: 2000,
    duration: '1hour',
    category: 'Legal Services',
    description: 'Family law matters including divorce, custody, and inheritance',
    providerId: 11
  },

  // Metropolitan Law Firm (Legal Services) - Provider ID 12
  {
    id: 30,
    name: 'Tech Startup Legal Package',
    price: 4500,
    duration: '3hours',
    category: 'Legal Services',
    description: 'Complete legal package for technology startups',
    providerId: 12
  },
  {
    id: 31,
    name: 'Intellectual Property Services',
    price: 3000,
    duration: '2hours',
    category: 'Legal Services',
    description: 'Patent, trademark, and IP protection services',
    providerId: 12
  },

  // Prime Medical Clinic (Healthcare) - Provider ID 13
  {
    id: 32,
    name: 'Cardiology Consultation',
    price: 2000,
    duration: '45min',
    category: 'Healthcare',
    description: 'Expert cardiology consultation and heart health assessment',
    providerId: 13
  },
  {
    id: 33,
    name: 'Diabetes Management Program',
    price: 1800,
    duration: '1hour',
    category: 'Healthcare',
    description: 'Comprehensive diabetes management and lifestyle counseling',
    providerId: 13
  },

  // Health Plus Diagnostics (Healthcare) - Provider ID 14
  {
    id: 34,
    name: 'Full Body Checkup',
    price: 1500,
    duration: '2hours',
    category: 'Healthcare',
    description: 'Complete full body health checkup with detailed reports',
    providerId: 14
  },
  {
    id: 35,
    name: 'Blood Test Package',
    price: 800,
    duration: '30min',
    category: 'Healthcare',
    description: 'Comprehensive blood test package with quick results',
    providerId: 14
  },

  // Wellness Care Hospital (Healthcare) - Provider ID 15
  {
    id: 36,
    name: 'Wellness Consultation',
    price: 1200,
    duration: '1hour',
    category: 'Healthcare',
    description: 'Holistic wellness consultation and lifestyle guidance',
    providerId: 15
  },
  {
    id: 37,
    name: 'Physiotherapy Session',
    price: 800,
    duration: '45min',
    category: 'Healthcare',
    description: 'Professional physiotherapy and rehabilitation services',
    providerId: 15
  },

  // BuildRight Construction (Construction) - Provider ID 16
  {
    id: 38,
    name: 'Home Renovation Planning',
    price: 3000,
    duration: '2hours',
    category: 'Construction',
    description: 'Complete home renovation planning and design consultation',
    providerId: 16
  },
  {
    id: 39,
    name: 'Interior Design Consultation',
    price: 2500,
    duration: '1.5hours',
    category: 'Construction',
    description: 'Professional interior design consultation and planning',
    providerId: 16
  },

  // Elite Architects & Builders (Construction) - Provider ID 17
  {
    id: 40,
    name: 'Architectural Design',
    price: 6000,
    duration: '4hours',
    category: 'Construction',
    description: 'Premium architectural design and planning services',
    providerId: 17
  },
  {
    id: 41,
    name: 'Luxury Home Consultation',
    price: 5000,
    duration: '3hours',
    category: 'Construction',
    description: 'Exclusive consultation for luxury home construction',
    providerId: 17
  },

  // ModernBuild Solutions (Construction) - Provider ID 18
  {
    id: 42,
    name: 'Sustainable Building Consultation',
    price: 4000,
    duration: '2.5hours',
    category: 'Construction',
    description: 'Eco-friendly and sustainable building solutions',
    providerId: 18
  },
  {
    id: 43,
    name: 'Smart Home Integration',
    price: 3500,
    duration: '2hours',
    category: 'Construction',
    description: 'Smart home technology integration and automation',
    providerId: 18
  },

  // SpeedFix Auto Workshop (Automobile) - Provider ID 19
  {
    id: 44,
    name: 'Quick Oil Change',
    price: 800,
    duration: '30min',
    category: 'Automobile',
    description: 'Fast and efficient oil change service',
    providerId: 19
  },
  {
    id: 45,
    name: 'Brake System Service',
    price: 1500,
    duration: '1.5hours',
    category: 'Automobile',
    description: 'Complete brake system inspection and service',
    providerId: 19
  },

  // Premium Car Care (Automobile) - Provider ID 20
  {
    id: 46,
    name: 'Luxury Car Detailing',
    price: 3000,
    duration: '3hours',
    category: 'Automobile',
    description: 'Premium car detailing and aesthetic enhancement',
    providerId: 20
  },
  {
    id: 47,
    name: 'Paint Protection Service',
    price: 5000,
    duration: '4hours',
    category: 'Automobile',
    description: 'Advanced paint protection and ceramic coating',
    providerId: 20
  },

  // AutoTech Garage (Automobile) - Provider ID 21
  {
    id: 48,
    name: 'ECU Diagnostic Service',
    price: 2000,
    duration: '2hours',
    category: 'Automobile',
    description: 'Advanced ECU diagnostic and programming services',
    providerId: 21
  },
  {
    id: 49,
    name: 'Hybrid Vehicle Service',
    price: 2500,
    duration: '2.5hours',
    category: 'Automobile',
    description: 'Specialized service for hybrid and electric vehicles',
    providerId: 21
  },

  // Digital Solutions Hub (Hardware) - Provider ID 22
  {
    id: 50,
    name: 'Server Setup & Maintenance',
    price: 5000,
    duration: '4hours',
    category: 'Hardware',
    description: 'Enterprise server setup and ongoing maintenance',
    providerId: 22
  },
  {
    id: 51,
    name: 'Cloud Infrastructure Setup',
    price: 4000,
    duration: '3hours',
    category: 'Hardware',
    description: 'Cloud infrastructure design and implementation',
    providerId: 22
  },

  // PC Care Center (Hardware) - Provider ID 23
  {
    id: 52,
    name: 'Laptop Screen Replacement',
    price: 3000,
    duration: '2hours',
    category: 'Hardware',
    description: 'Professional laptop screen replacement service',
    providerId: 23
  },
  {
    id: 53,
    name: 'Virus Removal & Security',
    price: 1500,
    duration: '1.5hours',
    category: 'Hardware',
    description: 'Complete virus removal and security setup',
    providerId: 23
  },

  // Smart Tech Solutions (Hardware) - Provider ID 24
  {
    id: 54,
    name: 'Smart Home Setup',
    price: 4500,
    duration: '3hours',
    category: 'Hardware',
    description: 'Complete smart home technology integration',
    providerId: 24
  },
  {
    id: 55,
    name: 'IoT Device Configuration',
    price: 2500,
    duration: '2hours',
    category: 'Hardware',
    description: 'IoT device setup and network configuration',
    providerId: 24
  }
];

module.exports = {
  categories,
  providers,
  serviceItems
};
