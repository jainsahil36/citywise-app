import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { useTheme } from '../hooks/useTheme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { CategoryButtons } from '../components/services/CategoryButtons';
import { ServiceCards } from '../components/services/ServiceCards';
import { Header } from '../components/common/Header';

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

const categories = [
  { id: 1, name: 'Consulting', icon: 'briefcase' },
  { id: 2, name: 'Health', icon: 'medkit' },
  { id: 3, name: 'Legal', icon: 'document-text' },
  { id: 4, name: 'Education', icon: 'school' },
  { id: 5, name: 'Others', icon: 'apps' },
] as const;

const services = [
  { 
    id: 1, 
    title: 'Financial Planning',
    icon: 'cash',
    category: 'Consulting',
    description: 'Professional financial planning services to help you achieve your goals',
    price: 150,
    rating: 4.8,
  },
  { 
    id: 2, 
    title: 'Tax Advisory',
    icon: 'document',
    category: 'Consulting',
    description: 'Expert tax advice and planning for individuals and businesses',
    price: 200,
    rating: 4.9,
  },
  { 
    id: 3, 
    title: 'Investment Help',
    icon: 'trending-up',
    category: 'Consulting',
    description: 'Investment strategies and portfolio management services',
    price: 175,
    rating: 4.7,
  },
] as const;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled(ScrollView)`
  flex: 1;
`;

const ContentContainer = styled.View`
  padding-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const ServicesScreen: React.FC<Props> = ({ navigation }) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = React.useState<string | undefined>(
    undefined
  );

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleServiceSelect = (serviceId: number) => {
    navigation.navigate('ServiceDetails', { serviceId });
  };

  const filteredServices = React.useMemo(() => {
    if (!selectedCategory) return services;
    return services.filter(service => service.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Container>
      <Header title="Services" />
      <Content showsVerticalScrollIndicator={false}>
        <ContentContainer>
          <CategoryButtons
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
          <ServiceCards
            services={filteredServices}
            onServiceSelect={handleServiceSelect}
          />
        </ContentContainer>
      </Content>
    </Container>
  );
};
