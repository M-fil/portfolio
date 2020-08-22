import React from 'react';
import { useTranslation } from 'react-i18next';

import MainStyle from './styled/MainStyle';

const Fade = require('react-reveal/Fade');

const Main: React.FC = () => {
  const [t] = useTranslation();

  return (
    <MainStyle>
      <Fade right>
        <h1 className="main-page__title">
          {t('main.name')}
        </h1>
        <h4 className="main-page__activity">
          {t('main.activity')}
        </h4>
      </Fade>
    </MainStyle>
  );
};

export default Main;
