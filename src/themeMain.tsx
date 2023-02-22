import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a4ffaf', // neon-green
      dark: '#24232c', // dark-grey
      light: '#817d92', // grey
      contrastText: '#18171f', // very-dark-grey
    },
    secondary: {
      light: '#e6e5ea', // almost-white
      main: '#a4ffaf', // neon-green
      dark: '#18171f', // very-dark-grey
      contrastText: '#f64a4a', // red
    },
  },
  typography: {
    body1: {
      fontFamily: 'JetBrainsMono',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '21px',
    },
    body2: {
      fontFamily: 'JetBrainsMono',
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '24px',
    },
    h1: {
      fontFamily: 'JetBrainsMono',
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '42px',
    },
    h2: {
      fontFamily: 'JetBrainsMono',
      fontWeight: '700',
      fontSize: '24px',
      lineHeight: '32px',
    },
    h3: {
      fontFamily: 'JetBrainsMono',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '21px',
    },
  },
  breakpoints: {},
});

export default theme;
