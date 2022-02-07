import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { MangoProvider } from './components/MangoContext/MangoContext';
// eslint-disable-next-line no-unused-vars
import * as dayjsConfig from './config/dayjs';

import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from './theme/theme.js';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <MangoProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MangoProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
