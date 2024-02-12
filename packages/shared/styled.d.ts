import 'styled-components';

import { ThemeProps } from './src/theme/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}