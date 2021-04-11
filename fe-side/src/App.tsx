import React from 'react';
import Routes from './routes';

import {
  ThemeProvider,
} from '@material-ui/core/styles';
import { theme } from './theme';

import AddAxiosInreceptors from './services/axios/middleware/intercepror';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AddAxiosInreceptors />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
