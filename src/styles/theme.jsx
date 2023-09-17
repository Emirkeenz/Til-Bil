import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { defaultColorScheme } from './color-schemes/default';

const theme = {
  fonts: {
    normal: "'Poppins', sans-serif",
  },
  colors: defaultColorScheme,
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
