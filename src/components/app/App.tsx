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
import Portfolio from '../portfolio/Portfolio';
import Career from '../career/Career';
import Comments from '../comments/Comments';

import AppStyle from './styled/AppStyle';

const App: React.FC = () => {
  return (
    <>
      <AppStyle>
        <BrowserRouter>
          <Navigation />
          <div id="main-content">
            <Switch>
              <Route component={Main} path="/" exact />
              <Route component={About} path="/about" />
              <Route component={Portfolio} path="/portfolio" />
              <Route component={Career} path="/career" />
              <Route component={Comments} path="/comments" />
            </Switch>
          </div>
        </BrowserRouter>
      </AppStyle>
    </>
  )
}

export default App;

