import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavBar from './components/NavBar';
import ModalsPage from './pages/ModalsPage';
import ReduxPage from './pages/ReduxPage';

import store from './redux/configureStore';

import { Wrapper } from './App.styles';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Route path="/modals" component={ModalsPage} />
          <Route path="/redux" component={ReduxPage} />
        </BrowserRouter>
      </Provider>
    </Wrapper>
  );
};

export default App;
