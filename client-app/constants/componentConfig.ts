/**
 * Constants for component configurations
 */

// Animation configurations
export const ANIMATION_CONFIG = {
  PRESS_FEEDBACK: {
    DURATION: 200,
    SCALE_TO: 0.95,
  },
  FADE: {
    DURATION: 300,
  },
} as const;

// Component-specific configurations
export const CATEGORY_ITEM_CONFIG = {
  /** Width percentage for category items in the grid */
  WIDTH_PERCENTAGE: '30%',
  /** Icon size for category items */
  ICON_SIZE: 32,
  /** Animation duration for press feedback */
  PRESS_ANIMATION_DURATION: ANIMATION_CONFIG.PRESS_FEEDBACK.DURATION,
} as const;

export const SERVICE_CARD_CONFIG = {
  /** Width for service cards */
  WIDTH: 200,
  /** Icon size for service cards */
  ICON_SIZE: 40,
  /** Maximum number of title lines */
  MAX_TITLE_LINES: 2,
  /** Animation duration for press feedback */
  PRESS_ANIMATION_DURATION: ANIMATION_CONFIG.PRESS_FEEDBACK.DURATION,
} as const;

export const HEADER_CONFIG = {
  /** Icon size for header buttons */
  ICON_SIZE: 24,
  /** Maximum number of title lines */
  MAX_TITLE_LINES: 1,
} as const;

/**
 * Test IDs for component testing
 */
export const TEST_IDS = {
  // Category Item
  CATEGORY_ITEM: 'category-item',
  CATEGORY_ICON: 'category-icon',
  CATEGORY_TEXT: 'category-text',
  
  // Service Card
  SERVICE_CARD: 'service-card',
  SERVICE_ICON: 'service-icon',
  SERVICE_TITLE: 'service-title',
  
  // Header
  HEADER: 'header',
  HEADER_BACK: 'header-back',
  HEADER_TITLE: 'header-title',
  HEADER_MENU: 'header-menu',
  
  // Footer
  FOOTER: 'footer',
  FOOTER_LINK: 'footer-link',
  FOOTER_SOCIAL: 'footer-social',
} as const;

/**
 * Accessibility labels
 */
export const ACCESSIBILITY_LABELS = {
  CATEGORY_ITEM: (name: string) => `Select ${name} category`,
  SERVICE_CARD: (title: string) => `View ${title} service`,
  BACK_BUTTON: 'Go back',
  MENU_BUTTON: 'Open menu',
} as const;
