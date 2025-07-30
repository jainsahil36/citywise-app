const ngrok = require('@expo/ngrok');
const express = require('express');

async function startTunnel() {
  try {
    // Start ngrok tunnel on port 3000
    const url = await ngrok.connect({
      addr: 3000,
      authtoken_from_env: true,
    });
    
    console.log('\n🌐 Backend server tunnel created!');
    console.log('📡 Local server: http://localhost:3000');
    console.log('🌍 Public URL:', url);
    console.log('\n📋 API Endpoints:');
    console.log(`   Categories: ${url}/api/categories`);
    console.log(`   Providers: ${url}/api/providers`);
    console.log(`   Health: ${url}/api/health`);
    console.log('\n💡 Update your client app config to use this URL:');
    console.log(`   DEV_BASE_URL: '${url}/api'`);
    console.log('\n🔄 Press Ctrl+C to stop the tunnel\n');
    
    // Keep the process alive
    process.on('SIGINT', async () => {
      console.log('\n🛑 Stopping tunnel...');
      await ngrok.disconnect();
      await ngrok.kill();
      process.exit(0);
    });
    
  } catch (error) {
    console.error('❌ Failed to start tunnel:', error.message);
    
    if (error.message.includes('authtoken')) {
      console.log('\n💡 Setup ngrok authtoken:');
      console.log('1. Sign up at https://ngrok.com/');
      console.log('2. Get your authtoken from https://dashboard.ngrok.com/get-started/your-authtoken');
      console.log('3. Run: npx ngrok authtoken YOUR_TOKEN');
    }
    
    process.exit(1);
  }
}

startTunnel();
