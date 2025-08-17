# CityWise Backend Integration Guide

This document explains how the CityWise client app has been updated to use the backend server instead of mock data.

## 🔄 Changes Made

### Backend Server (server-api)
- **Express.js server** created with RESTful API endpoints
- **Data models** for categories, providers, and services
- **CORS enabled** for client app communication
- **Error handling** and proper HTTP response codes
- **Comprehensive routing** with filtering and search capabilities

### Client App Updates (client-app)
- **API Service updated** (`services/apiService.ts`) to use real HTTP requests
- **Configuration added** (`services/config.ts`) for environment-specific URLs
- **Vendor detail screen updated** to load services from the backend
- **Error handling** with fallback to mock data

## 🌐 API Endpoints Used by Client App

### Categories
- `GET /api/categories` - Used in home screen to display service categories
- `GET /api/categories/:id` - Used for category-specific pages

### Providers
- `GET /api/providers` - Used in vendor listing screens
- `GET /api/providers/:id` - Used in vendor detail screens
- `GET /api/providers/:id/services` - Used to display services for each vendor
- `GET /api/providers?categoryId=X` - Used to filter vendors by category
- `GET /api/providers?search=term` - Used for search functionality

## 🔧 Configuration

The client app automatically detects the environment:
- **Development**: `http://localhost:3000/api`
- **Production**: Update `PROD_BASE_URL` in `services/config.ts`

## 🚀 Running Both Applications

### Start Backend Server
```bash
cd server-api
npm run dev
```
Server runs on: `http://localhost:3000`

### Start Client App
```bash
cd client-app
npm start
```

### Using VS Code Tasks
- A VS Code task has been created: "Start CityWise Backend Server"
- Run it from Command Palette: `Tasks: Run Task` → `Start CityWise Backend Server`

## 📱 Client App Features Now Using Backend

1. **Home Screen Categories** - Loads from `/api/categories`
2. **Vendor Listings** - Loads from `/api/providers` with category filtering
3. **Vendor Details** - Loads provider info from `/api/providers/:id`
4. **Service Lists** - Loads services from `/api/providers/:id/services`
5. **Search Functionality** - Uses `/api/providers?search=term`

## 🔄 Fallback Mechanism

The client app includes graceful error handling:
- If the backend is unavailable, it falls back to mock data
- Console warnings notify developers of API failures
- Users see consistent functionality regardless of backend status

## 🔮 Next Steps

1. **Database Integration**: Replace in-memory data with persistent storage
2. **Authentication**: Add user authentication and authorization
3. **Real-time Updates**: Implement WebSocket connections for live data
4. **Caching**: Add client-side caching for better performance
5. **Offline Support**: Implement offline functionality with data synchronization
