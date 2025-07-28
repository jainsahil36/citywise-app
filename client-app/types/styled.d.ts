import 'styled-components/native';
import { theme } from '../constants/theme';

type Theme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
