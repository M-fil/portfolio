import React from 'react';
import { useTranslation } from 'react-i18next';

import { calculateAge } from '../../utils/calculations';

const About: React.StatelessComponent = () => {
  const [t] = useTranslation();

  return (
    <div className="about">
      <div className="about__person">
        <div className="about__name">{t('about.name')}</div>
        <div className="about__short-info">
          {`${calculateAge()} ${t('about.years')}, ${t('about.activity')}`}
        </div>
      </div>
      <div className="about__description">{t('about.description')}</div>
      <div className="about__skills"></div>
    </div>
  )
}

export default About
