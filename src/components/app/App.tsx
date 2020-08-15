import React from 'react';
import {
  BrowserRouter,
  Switch as RouteSwitch,
  Route,
} from 'react-router-dom';
import { Switch } from 'antd';

import Navigation from '../navigation/Navigation';
import About from '../about/About';
import Main from '../main/Main';
import Portfolio from '../portfolio/Portfolio';
import Career from '../career/Career';
import Comments from '../comments/Comments';
import Contacts from '../contacts/Contacts';
import Footer from '../footer/Footer';
import LanguageSwitch from '../language-switch/LanguageSwitch';

import AppStyle from './styled/AppStyle';

const App: React.FC = () => (
  <>
    <AppStyle>
      <BrowserRouter>
        <main id="main">
          <LanguageSwitch />
          <div id="side-sections">
            <section id="left-side">
              <Navigation />
            </section>
            <section id="right-side">
              <div id="main-content">
                <RouteSwitch>
                  <Route component={Main} path="/" exact />
                  <Route component={About} path="/about" />
                  <Route component={Portfolio} path="/portfolio" />
                  <Route component={Career} path="/career" />
                  <Route component={Comments} path="/comments" />
                  <Route component={Contacts} path="/contacts" />
                </RouteSwitch>
              </div>
            </section>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </AppStyle>
  </>
);

export default App;
