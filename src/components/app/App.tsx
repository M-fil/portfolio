import React, { useState, MouseEvent } from 'react';
import {
  BrowserRouter,
  Switch as RouteSwitch,
  Route,
} from 'react-router-dom';
import { Button, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';


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
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const toggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <>
      <GlobalStyles />
      <AppStyle
        rightBlockWidth={sideBlockStyles.rightBlockWidth}
        leftBlockWidth={sideBlockStyles.leftBlockWidth}
      >
        <BrowserRouter>
          <main id="main">
            <div id="overlay" className={isMenuOpened ? ' visible' : ''} />
            <div id="side-sections">
              <section
                id="left-side"
                className={`left-side${isMenuOpened ? '' : ' closed'}`}
              >
                <Button
                  className="open-menu-button"
                  icon={isMenuOpened ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={toggleMenu}
                />
                <img
                  id="person-image"
                  src={urls.PERSON_IMAGE_1_URL}
                  alt={personalData.FULL_NAME as string}
                />
                <Navigation
                  setStyles={setSideBlockStyles}
                  setIsMenuOpened={setIsMenuOpened}
                />
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
