/* eslint-disable no-unused-vars */
import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavBar from './components/NavBar';
import ModalsPage from './pages/ModalsPage';
import ReduxPage from './pages/ReduxPage';

import store from './redux/configureStore';
import { routes } from './routes';

import { Wrapper } from './App.styles';

interface AppProps {
  context?: { url?: string };
  location?: string;
  Router: any;
  store: any;
}

const App: React.FC<AppProps> = ({ context, location, Router, store }) => {
  return (
    <Wrapper>
      <Provider store={store}>
        <Router location={location} context={context}>
          <NavBar />
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} />
          ))}
        </Router>
      </Provider>
    </Wrapper>
  );
};

export default App;
