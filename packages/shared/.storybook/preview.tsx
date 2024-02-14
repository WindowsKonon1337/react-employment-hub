import { ThemeProvider } from 'styled-components';
import { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { baseTheme, GlobalStyles } from '../src/theme';


const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    baseTheme
  },
  Provider: ThemeProvider,
  GlobalStyles,
})];