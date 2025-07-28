import { IconName } from '@expo/vector-icons/Ionicons';

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
}

export interface FooterLink {
  id: number;
  title: string;
  url: string;
}

export interface ScreenProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
    goBack: () => void;
    toggleDrawer: () => void;
  };
}

export interface CategoryItemProps {
  item: Category;
  onPress: () => void;
}

export interface ServiceCardProps {
  item: Service;
  onPress: () => void;
}
