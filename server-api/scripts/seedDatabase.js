const mongoose = require('mongoose');
require('dotenv').config();

const { connectDB } = require('../config/database');
const { Category, Provider, ServiceItem } = require('../models');
const { categories, providers, serviceItems } = require('../data/mockData');

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Connect to database
    await connectDB();
    
    // Clear existing data
    console.log('🗑️ Clearing existing data...');
    await Category.deleteMany({});
    await Provider.deleteMany({});
    await ServiceItem.deleteMany({});
    
    // Seed categories
    console.log('📂 Seeding categories...');
    const categoryDocs = await Category.insertMany(categories);
    console.log(`✅ Inserted ${categoryDocs.length} categories`);
    
    // Seed providers - map isNew to isNewProvider for database
    console.log('🏪 Seeding providers...');
    const mappedProviders = providers.map(provider => ({
      ...provider,
      isNewProvider: provider.isNew || false,
      isNew: undefined // Remove the original field
    }));
    const providerDocs = await Provider.insertMany(mappedProviders);
    console.log(`✅ Inserted ${providerDocs.length} providers`);
    
    // Seed service items
    console.log('🛠️ Seeding service items...');
    const serviceItemDocs = await ServiceItem.insertMany(serviceItems);
    console.log(`✅ Inserted ${serviceItemDocs.length} service items`);
    
    // Update provider service counts
    console.log('🔢 Updating provider service counts...');
    for (const provider of providers) {
      const serviceCount = serviceItems.filter(item => item.providerId === provider.id).length;
      await Provider.updateOne(
        { id: provider.id },
        { totalServices: serviceCount }
      );
    }
    console.log('✅ Updated provider service counts');
    
    console.log('🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`Categories: ${categoryDocs.length}`);
    console.log(`Providers: ${providerDocs.length}`);
    console.log(`Service Items: ${serviceItemDocs.length}`);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  } finally {
    await mongoose.connection.close();
    console.log('📴 Database connection closed');
  }
};

// Run seeding if called directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('✅ Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Seeding failed:', error);
      process.exit(1);
    });
}

module.exports = { seedDatabase };
