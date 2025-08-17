# MongoDB Setup Guide

This guide helps you set up MongoDB for the CityWise API server.

## Option 1: MongoDB Atlas (Cloud - Recommended)

MongoDB Atlas is a cloud database service that's free for development.

### Steps:

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account

2. **Create a Cluster**
   - Choose "Build a Database"
   - Select "M0 Sandbox" (Free tier)
   - Choose your preferred cloud provider and region
   - Name your cluster (e.g., "citywise-cluster")

3. **Configure Database Access**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create a username and strong password
   - Set privileges to "Read and write to any database"

4. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - For development, you can choose "Allow Access from Anywhere" (0.0.0.0/0)
   - For production, add only your server's IP address

5. **Get Connection String**
   - Go to "Clusters" and click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

6. **Update .env file**
   ```env
   MONGODB_URI=mongodb+srv://username:password@citywise-cluster.xxxxx.mongodb.net/citywise?retryWrites=true&w=majority
   ```

## Option 2: Local MongoDB Installation

### Windows:

1. **Download MongoDB Community Server**
   - Go to [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Download the MSI file for Windows

2. **Install MongoDB**
   - Run the MSI installer
   - Choose "Complete" installation
   - Install MongoDB as a service (recommended)

3. **Start MongoDB Service**
   ```powershell
   net start MongoDB
   ```

4. **Verify Installation**
   ```powershell
   mongo --version
   ```

### macOS:

1. **Using Homebrew (Recommended)**
   ```bash
   # Install MongoDB
   brew tap mongodb/brew
   brew install mongodb-community

   # Start MongoDB
   brew services start mongodb/brew/mongodb-community
   ```

2. **Verify Installation**
   ```bash
   mongo --version
   ```

### Linux (Ubuntu):

1. **Install MongoDB**
   ```bash
   # Import public key
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

   # Add repository
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

   # Update and install
   sudo apt-get update
   sudo apt-get install -y mongodb-org

   # Start MongoDB
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

## After Setup

1. **Update your .env file** with the correct MongoDB URI
2. **Run the seeding script**:
   ```bash
   npm run seed
   ```
3. **Start the server**:
   ```bash
   npm run dev
   ```

## Troubleshooting

### Connection Issues
- Ensure MongoDB is running (`net start MongoDB` on Windows)
- Check that the URI in .env is correct
- For Atlas, verify IP whitelist and credentials

### Port Issues
- Default MongoDB port is 27017
- Make sure no other service is using this port
- You can change the port in the MongoDB configuration

### Memory Issues
- MongoDB requires at least 3GB of RAM for optimal performance
- For development, 1GB should be sufficient

## Database Tools

### MongoDB Compass (GUI)
- Download from [MongoDB Compass](https://www.mongodb.com/products/compass)
- Use the same connection string to connect
- Great for visualizing and managing your data

### MongoDB Shell
```bash
# Connect to local MongoDB
mongo

# Connect to Atlas
mongo "mongodb+srv://cluster-name.xxxxx.mongodb.net/citywise" --username your-username
```

## Next Steps

Once MongoDB is set up and running:
1. Run `npm run seed` to populate initial data
2. Use `npm run dev` to start the development server
3. Test the API endpoints at `http://localhost:3000/api`
