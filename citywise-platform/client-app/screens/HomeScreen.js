import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const city = 'AMBALA CITY';
const temp = '86°';

// Replace with your actual images under /assets folder
const quickLinks = [
  { id: 1, name: 'Services', image: require('../assets/images/services.png') },
  { id: 2, name: 'Shops', image: require('../assets/images/shops.png') },
  { id: 3, name: 'Restaurants', image: require('../assets/images/restaurants.png') },
];

const categories = [
  { id: 1, name: 'Interior', image: require('../assets/images/interior.png') },
  { id: 2, name: 'Construction Materials', image: require('../assets/images/construction.png') },
  { id: 3, name: 'Used Cars', image: require('../assets/images/cars.png') },
  { id: 4, name: 'Healthcare', image: require('../assets/images/healthcare.png') },
  { id: 5, name: 'Solar', image: require('../assets/images/solar.png') },
  { id: 6, name: 'Hardware', image: require('../assets/images/hardware.png') },
  { id: 7, name: 'Automobile', image: require('../assets/images/automobile.png') },
  { id: 8, name: 'Market', image: require('../assets/images/market.png') },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Location Row */}
      <View style={styles.header}>
        <Ionicons name="location-sharp" size={20} color="blue" />
        <Text style={styles.cityText}>{city}</Text>
        <Text style={styles.temp}>{temp}</Text>
      </View>

      {/* Title */}
      <Text style={styles.heading}>Bringing locals online citywise</Text>

      {/* Quick Access Buttons */}
      <View style={styles.quickLinks}>
        {quickLinks.map(link => (
          <TouchableOpacity
            key={link.id}
            style={styles.quickItem}
            onPress={() => console.log(link.name)}
          >
            <Image source={link.image} style={styles.quickImage} />
            <Text>{link.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Category Grid */}
      <View style={styles.categorySection}>
        <Text style={styles.subHeading}>Shop by category</Text>
        <FlatList
          data={categories}
          numColumns={4}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => console.log(`Selected: ${item.name}`)}
            >
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Cart Summary Section */}
      <View style={styles.cartSection}>
        <Text style={styles.cartText}>₹7,206.00</Text>
        <Text style={styles.cartSub}>1 Item • 1 quantity</Text>
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => navigation?.navigate?.('Cart')}
        >
          <Text style={styles.cartBtnText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  temp: {
    marginLeft: 'auto',
    color: '#888',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  quickItem: {
    alignItems: 'center',
    width: '30%',
  },
  quickImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  categorySection: {
    marginTop: 20,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 5,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 12,
  },
  cartSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartSub: {
    color: '#888',
    marginBottom: 8,
  },
  cartBtn: {
    backgroundColor: '#4EA5FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  cartBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
