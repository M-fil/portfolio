import React from 'react';
import { useTranslation } from 'react-i18next';

import { personalData, urls } from '../../constants/constants';
import MainStyle from './styled/MainStyle';

const Main: React.FC = () => {
  const [t] = useTranslation();

  return (
    <MainStyle>
      <h1 className="main-page__title">
        {t('navigation.name')}
      </h1>
    </MainStyle>
  );
};

export default Main;
