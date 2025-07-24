/**
 * Common interface definitions for the CityWise application
 */

import type { Category, Service } from './index';

// Component Props
export interface ServiceCardProps {
  /** The service to display in the card */
  service: Service;
  /** Optional callback when the card is pressed */
  onPress?: (service: Service) => void;
  /** Optional test ID for component testing */
  testID?: string;
}

export interface FooterLink {
  id: number;
  name: string;
  url?: string;
}

// Component Props Interfaces
export interface CategoryItemProps {
  /** The category data to display */
  category: Category;
  /** Callback function when category is pressed */
  onPress: (category: Category) => void;
  /** Optional test ID for testing purposes */
  testID?: string;
}

export interface ServiceCardProps {
  /** The service data to display */
  service: Service;
  /** Optional callback function when service is pressed */
  onPress?: (service: Service) => void;
  /** Optional test ID for testing purposes */
  testID?: string;
}

export interface HeaderProps {
  /** Optional callback for menu button press */
  onMenuPress?: () => void;
  /** Optional title to display */
  title?: string;
  /** Whether to show back button */
  showBack?: boolean;
  /** Optional callback for back button press */
  onBackPress?: () => void;
  /** Optional test ID for testing purposes */
  testID?: string;
}

export interface FooterProps {
  /** Array of links to display in footer */
  links: FooterLink[];
  /** Optional callback when a link is pressed */
  onLinkPress?: (link: FooterLink) => void;
  /** Optional test ID for testing purposes */
  testID?: string;
}
