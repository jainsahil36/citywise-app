import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { commonStyles } from '../../styles/common/styles';
import { theme } from '../../styles/theme/theme';
import { NavigationProps } from '../../types';

interface WelcomeScreenProps {
  navigation: NavigationProps;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Image 
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to CityWise</Text>
        <Text style={styles.subtitle}>
          Your one-stop marketplace for local services and products
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={[styles.buttonText, styles.signupButtonText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

type Styles = {
  container: ViewStyle;
  heroSection: ViewStyle;
  logo: ImageStyle;
  title: TextStyle;
  subtitle: TextStyle;
  buttonContainer: ViewStyle;
  button: ViewStyle;
  loginButton: ViewStyle;
  signupButton: ViewStyle;
  buttonText: TextStyle;
  signupButtonText: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  heroSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.primary.main,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginHorizontal: 40,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 40,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  loginButton: {
    backgroundColor: theme.colors.primary.main,
  },
  signupButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.primary.main,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text.light,
  },
  signupButtonText: {
    color: theme.colors.primary.main,
  },
});
