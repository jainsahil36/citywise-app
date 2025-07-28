import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled, { useTheme } from 'styled-components/native';
import type { DefaultTheme } from 'styled-components/native';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showSearch?: boolean;
  showMenu?: boolean;
  onBackPress?: () => void;
  onMenuPress?: () => void;
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.md}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background.surface};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.border};
`;

const LogoContainer = styled.View`
  flex: 1;
`;

const Logo = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.h2.fontSize}px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background.main};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.borderRadius.sm}px;
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm}px;
  margin-horizontal: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm}px;
  flex: 1;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.body2.fontSize}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
  margin-left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm}px;
`;

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showSearch = false,
  showMenu = false,
  onBackPress,
  onMenuPress,
}) => {
  const theme = useTheme();

  return (
    <Container>
      {showBack && (
        <TouchableOpacity onPress={onBackPress} style={{ marginRight: theme.spacing.sm }}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text.primary} />
        </TouchableOpacity>
      )}
      <LogoContainer>
        {title ? (
          <Logo>{title}</Logo>
        ) : (
          <Logo>CityWise</Logo>
        )}
      </LogoContainer>
      {showSearch && (
        <SearchContainer>
          <Ionicons name="search" size={20} color={theme.colors.text.secondary} />
          <SearchInput
            placeholder="Search services..."
            placeholderTextColor={theme.colors.text.secondary}
          />
        </SearchContainer>
      )}
      {showMenu && (
        <TouchableOpacity onPress={onMenuPress}>
          <Ionicons name="menu" size={24} color={theme.colors.text.primary} />
        </TouchableOpacity>
      )}
    </Container>
  );
};
