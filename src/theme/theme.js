import { extendTheme } from '@chakra-ui/react';

const colors = {
  color: {
    primary: '#ffc324',
    primarylight: '#f7d887',
    primarydark: '#b1830a',
    secondary: '#62cbc5',
    secondarylight: '#92d7d3',
    secondarydark: '#3c9191',
    black: '#22302c',
    white: '#fffef5',
  },
};

const config = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
};

export const theme = extendTheme({
  colors,
  config,
});
