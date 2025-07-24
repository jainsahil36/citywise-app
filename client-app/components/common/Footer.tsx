import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { footerStyles } from './FooterStyles';

export const Footer = ({ links, onLinkPress }) => (
  <View style={footerStyles.footer}>
    <View style={footerStyles.footerLinks}>
      {links.map(link => (
        <TouchableOpacity 
          key={link.id}
          onPress={() => onLinkPress?.(link)}
          style={{ paddingVertical: 8 }}
        >
          <Text style={footerStyles.footerLink}>{link.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={footerStyles.socialIcons}>
      <TouchableOpacity style={footerStyles.socialButton}>
        <Ionicons name="logo-facebook" size={24} color="#4A90E2" />
      </TouchableOpacity>
      <TouchableOpacity style={footerStyles.socialButton}>
        <Ionicons name="logo-twitter" size={24} color="#4A90E2" />
      </TouchableOpacity>
      <TouchableOpacity style={footerStyles.socialButton}>
        <Ionicons name="logo-instagram" size={24} color="#4A90E2" />
      </TouchableOpacity>
    </View>
  </View>
);
