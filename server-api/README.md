# server-api

# CityWise Backend API

A Node.js Express backend server for the CityWise mobile application that provides vendor and service data.

## Features

- RESTful API endpoints for categories and service providers
- CORS enabled for cross-origin requests
- Error handling and validation
- Search and filtering capabilities
- Pagination support
- Helmet security middleware
- Request logging with Morgan

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the server-api directory:
```bash
cd server-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload (nodemon)

## API Endpoints

### Health Check
- **GET** `/api/health` - Server health check

### Categories
- **GET** `/api/categories` - Get all service categories
- **GET** `/api/categories/:id` - Get a specific category by ID

### Providers
- **GET** `/api/providers` - Get all providers
  - Query parameters:
    - `categoryId` - Filter by category ID
    - `search` - Search by name, location, or description
    - `limit` - Limit number of results
    - `offset` - Pagination offset
- **GET** `/api/providers/:id` - Get a specific provider by ID
- **GET** `/api/providers/:id/services` - Get services for a specific provider
- **GET** `/api/providers/category/:categoryId` - Get providers by category ID

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
NODE_ENV=development
PORT=3000
API_BASE_URL=http://localhost:3000/api
CORS_ORIGIN=*
```

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

### Adding New Data

1. Update the data in `data/mockData.js`
2. The server will automatically reflect the changes

### Adding New Endpoints

1. Create new route files in the `routes/` directory
2. Add the routes to `server.js`

## Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Update the client app's API base URL to your production server
3. Consider using a process manager like PM2:

```bash
npm install -g pm2
pm2 start server.js --name "citywise-api"
```

## Security

- Helmet middleware for security headers
- CORS configured for development (update for production)
- Input validation on all endpoints
- Error handling to prevent information leakage

## Logging

Request logging is enabled using Morgan middleware. All API requests are logged to the console.

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Authentication and authorization
- Rate limiting
- Caching layer
- API documentation with Swagger
- Test suite
- Docker containerization