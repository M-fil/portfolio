import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import i18n from '../../i18n/i18n';

import Navigation from '../navigation/Navigation';
import About from '../about/About';
import Main from '../main/Main';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={About} path="/about" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
