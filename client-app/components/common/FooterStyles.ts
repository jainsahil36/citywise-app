import { StyleSheet } from 'react-native';

export const footerStyles = StyleSheet.create({
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  footerLink: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    gap: 32,
  },
  socialButton: {
    padding: 8,
  },
});
