import * as React from 'react';
import { render } from 'react-dom';

import GithubFilters from './containers/GithubFilters';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GithubFilters />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
