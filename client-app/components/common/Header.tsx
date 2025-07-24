import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { componentStyles, theme } from '../../styles/common';

export const Header = ({ onMenuPress }) => (
  <View style={componentStyles.header}>
    <View style={componentStyles.logoContainer}>
      <Text style={componentStyles.logo}>CityWise</Text>
    </View>
    <View style={componentStyles.searchBar}>
      <Ionicons 
        name="search" 
        size={20} 
        color={theme.colors.text.secondary} 
        style={componentStyles.icon} 
      />
      <TextInput
        style={componentStyles.input}
        placeholder="Search services..."
        placeholderTextColor={theme.colors.text.secondary}
      />
    </View>
    <TouchableOpacity onPress={onMenuPress}>
      <Ionicons 
        name="menu" 
        size={24} 
        color={theme.colors.text.primary} 
      />
    </TouchableOpacity>
  </View>
);
