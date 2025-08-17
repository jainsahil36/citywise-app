# server-api

# CityWise Backend API

A Node.js Express backend server for the CityWise mobile application that provides vendor and service data with MongoDB database integration.

## Features

- RESTful API endpoints for categories and service providers
- MongoDB NoSQL database integration
- CORS enabled for cross-origin requests
- Error handling and validation
- Search and filtering capabilities with MongoDB text search
- Pagination support
- Helmet security middleware
- Request logging with Morgan
- Database seeding scripts
- Admin endpoints for statistics and maintenance

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (v4.4 or higher) - Local installation or MongoDB Atlas

### Installation

1. Navigate to the server-api directory:
```bash
cd server-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the MongoDB connection string if needed
```bash
cp .env.example .env
```

4. Start MongoDB (if running locally):
```bash
# On Windows (if MongoDB is installed as service)
net start MongoDB

# On macOS/Linux
mongod --dbpath /path/to/your/db
```

5. Seed the database with initial data:
```bash
npm run seed
```

6. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload (nodemon)
- `npm run seed` - Seed the database with initial data
- `npm run db:seed` - Alias for seeding the database
- `npm run db:reset` - Reset and reseed the database

## Database Setup

### MongoDB Configuration

The application uses MongoDB as the primary database. The connection is configured through environment variables:

```env
MONGODB_URI=mongodb://localhost:27017/citywise
```

For MongoDB Atlas (cloud):
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/citywise?retryWrites=true&w=majority
```

### Database Models

#### Category Collection
- `id`: Unique numeric identifier
- `name`: Category name
- `icon`: Icon identifier
- `description`: Category description
- `image`: Optional image URL
- `isActive`: Boolean flag for active categories

#### Provider Collection
- `id`: Unique numeric identifier
- `name`: Provider name
- `location`: Provider location
- `image`: Provider image URL
- `rating`: Rating (0-5)
- `categoryId`: Reference to category
- `phone`: Optional phone number
- `description`: Optional description
- `isNew`: Boolean flag for new providers
- `isActive`: Boolean flag for active providers
- `totalServices`: Count of services offered

#### ServiceItem Collection
- `id`: Unique numeric identifier
- `name`: Service name
- `price`: Service price
- `duration`: Optional service duration
- `category`: Service category
- `description`: Optional description
- `providerId`: Reference to provider
- `isActive`: Boolean flag for active services

### Database Seeding

The database comes with a seeding script that populates initial data:

```bash
npm run seed
```

This script will:
1. Clear existing data
2. Insert categories, providers, and service items
3. Update provider service counts
4. Display a summary of inserted records

## API Endpoints

### Health Check
- **GET** `/api/health` - Server health check

### Categories
- **GET** `/api/categories` - Get all active service categories
- **GET** `/api/categories/:id` - Get a specific category by ID

### Providers
- **GET** `/api/providers` - Get all active providers
  - Query parameters:
    - `categoryId` - Filter by category ID
    - `search` - Search by name, location, or description (MongoDB text search)
    - `limit` - Limit number of results
    - `offset` - Pagination offset
- **GET** `/api/providers/:id` - Get a specific provider by ID
- **GET** `/api/providers/:id/services` - Get services for a specific provider
- **GET** `/api/providers/category/:categoryId` - Get providers by category ID

### Admin Endpoints
- **GET** `/api/admin/stats` - Get database statistics
- **GET** `/api/admin/providers/top` - Get top providers with service counts
- **GET** `/api/admin/categories/detailed` - Get categories with provider counts
- **GET** `/api/admin/search/global` - Global search across all collections
  - Query parameters:
    - `q` - Search term (required)
    - `limit` - Limit results (default: 20)
- **POST** `/api/admin/maintenance/update-counts` - Update provider service counts

## API Response Format

All API responses follow this format:

```json
{
  "success": true,
  "data": [...],
  "count": 10,
  "pagination": {
    "total": 100,
    "count": 10,
    "offset": 0,
    "limit": 10
  }
}
```

Error responses:
```json
{
  "success": false,
  "error": "Error message",
  "message": "Detailed error description"
}
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Environment Configuration
NODE_ENV=development
PORT=3000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/citywise

# API Configuration
API_BASE_URL=http://localhost:3000/api

# CORS Configuration
CORS_ORIGIN=*

# Security Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Logging
LOG_LEVEL=info
```

### Production Environment Variables

For production deployment, make sure to:
1. Set `NODE_ENV=production`
2. Use a secure `JWT_SECRET`
3. Configure proper `CORS_ORIGIN`
4. Use MongoDB Atlas or a production MongoDB instance
5. Set proper logging level

## Data Structure

### Category
```typescript
interface ServiceCategory {
  id: number;
  name: string;
  icon: string;
  description: string;
  image?: string;
}
```

### Provider
```typescript
interface ServiceProvider {
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
```

### Service Item
```typescript
interface ServiceItem {
  id: number;
  name: string;
  price: number;
  duration?: string;
  category: string;
  description?: string;
  providerId: number;
}
```

## Client Integration

The client application should update its API service to point to this backend:

```typescript
const API_BASE_URL = 'http://localhost:3000/api';
```

## Development

### Database Operations

#### Seeding Data
```bash
# Seed the database with initial data
npm run seed

# Reset and reseed the database
npm run db:reset
```

#### MongoDB Operations
```bash
# Connect to MongoDB shell (local)
mongo citywise

# View collections
show collections

# Query data examples
db.categories.find()
db.providers.find({ isActive: true })
db.serviceitems.find({ providerId: 1 })
```

### Adding New Data

1. **Through Database**: Insert directly into MongoDB collections
2. **Through Seeding**: Update `data/mockData.js` and run `npm run seed`
3. **Through API**: Use POST endpoints (to be implemented)

### Adding New Endpoints

1. Create new route files in the `routes/` directory
2. Add the routes to `server.js`
3. Use the existing models or create new ones in `models/`

### Database Indexes

The application uses several MongoDB indexes for performance:
- Text indexes on searchable fields
- Single field indexes on frequently queried fields
- Compound indexes for complex queries

### Performance Monitoring

Use the admin endpoints to monitor database performance:
- `/api/admin/stats` - Overall statistics
- `/api/admin/providers/top` - Top performing providers

## Production Deployment

### Prerequisites
1. MongoDB Atlas account or production MongoDB server
2. Node.js production server
3. Process manager (PM2 recommended)

### Deployment Steps

1. **Environment Setup**:
```bash
# Set production environment variables
export NODE_ENV=production
export MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/citywise
export PORT=3000
```

2. **Database Setup**:
```bash
# Seed production database
npm run seed
```

3. **Application Deployment**:
```bash
# Install PM2 globally
npm install -g pm2

# Start application with PM2
pm2 start server.js --name "citywise-api"

# Save PM2 configuration
pm2 save
pm2 startup
```

4. **Client Configuration**:
   - Update the client app's API base URL to your production server
   - Ensure CORS is properly configured for your domain

### Docker Deployment (Optional)

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Monitoring

- Use PM2 for process monitoring: `pm2 monit`
- Monitor database performance through MongoDB Atlas dashboard
- Set up logging and error tracking (Sentry, LogRocket, etc.)

## Security

- Helmet middleware for security headers
- CORS configured for development (update for production)
- Input validation on all endpoints
- Error handling to prevent information leakage

## Logging

Request logging is enabled using Morgan middleware. All API requests are logged to the console.

## Future Enhancements

- ✅ Database integration (MongoDB) - **COMPLETED**
- Authentication and authorization (JWT)
- Rate limiting and request throttling
- Redis caching layer for improved performance
- API documentation with Swagger/OpenAPI
- Comprehensive test suite (Jest/Mocha)
- Docker containerization
- Elasticsearch integration for advanced search
- Real-time notifications (WebSocket/Socket.io)
- File upload handling for images
- Data analytics and reporting endpoints
- Backup and restore scripts
- API versioning
- GraphQL endpoint (optional)
- Microservices architecture migration

## Recent Updates

### v2.0.0 - Database Integration
- ✅ Added MongoDB integration with Mongoose
- ✅ Created database models for Categories, Providers, and ServiceItems
- ✅ Implemented database seeding scripts
- ✅ Added text search capabilities
- ✅ Created admin endpoints for statistics and maintenance
- ✅ Added database utilities and helper functions
- ✅ Updated all API endpoints to use database instead of mock data
- ✅ Added comprehensive error handling and logging