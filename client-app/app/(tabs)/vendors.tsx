import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import type { DefaultTheme } from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.md}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background.main};
`;

const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.h1.fontSize}px;
  font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.typography.h1.fontWeight};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.md}px;
`;

export default function VendorsScreen() {
  return (
    <Container>
      <Title>Vendors</Title>
    </Container>
  );
}
