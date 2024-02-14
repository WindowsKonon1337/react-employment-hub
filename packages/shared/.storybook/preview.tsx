import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { baseTheme, GlobalStyles } from '../src/theme';

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    baseTheme
  },
  Provider: ThemeProvider,
  GlobalStyles,
})];