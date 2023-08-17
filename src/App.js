import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import DefaultTheme from './styles/themes/default';

import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

import Router from './routes';

function App() {

  return (
    <HashRouter>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Layout>
          <Sidebar />
          <Router />
        </Layout>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
