import React from 'react';
import { useTranslation } from 'react-i18next';

import MainStyle from './styled/MainStyle';
const Fade = require('react-reveal/Fade');

const Main: React.FC = () => {
  const [t] = useTranslation();

  return (
    <MainStyle>
      <Fade right mountOnEnter unmountOnExit>
        <h1 className="main-page__title">
          {t('navigation.name')}
        </h1>
      </Fade>
    </MainStyle>
  );
};

export default Main;
