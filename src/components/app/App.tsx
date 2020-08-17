import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch as RouteSwitch,
  Route,
} from 'react-router-dom';

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
import { ISideBlockStyles } from '../../interfaces/interfaces';
import { personalData, urls } from '../../constants/constants';
import GlobalStyles from '../../styles/GlobalStyles';

const App: React.FC = () => {
  const [sideBlockStyles, setSideBlockStyles] = useState<ISideBlockStyles>({
    rightBlockWidth: '50%',
    leftBlockWidth: '50%',
  });

  return (
    <>
      <GlobalStyles />
      <AppStyle
        rightBlockWidth={sideBlockStyles.rightBlockWidth}
        leftBlockWidth={sideBlockStyles.leftBlockWidth}
      >
        <BrowserRouter>
          <main id="main">
            <div id="side-sections">
              <section id="left-side">
                <div className="person-image-container">
                  <img
                    id="person-image"
                    src={urls.PERSON_IMAGE_1_URL}
                    alt={personalData.FULL_NAME as string}
                  />
                </div>
                <Navigation setStyles={setSideBlockStyles} />
              </section>
              <section id="right-side">
                <LanguageSwitch />
                <div id="main-content">
                  <RouteSwitch>
                    <Route exact component={Main} path="/" />
                    <Route component={About} path="/about" />
                    <Route component={Portfolio} path="/portfolio" />
                    <Route component={Career} path="/career" />
                    <Route component={Comments} path="/comments" />
                    <Route component={Contacts} path="/contacts" />
                  </RouteSwitch>
                </div>
                <Footer />
              </section>
            </div>
          </main>
        </BrowserRouter>
      </AppStyle>
    </>
  );
};

export default App;
