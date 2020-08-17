import React, {
  useEffect, useState,
} from 'react';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';

import locales from '../../i18n/locales';
import LanguageSwitchStyle from './styled/LanguageSwitchStyle';
import i18n from '../../i18n/i18n';
import { LanguageType } from '../../interfaces/interfaces';

const Fade = require('react-reveal/Fade');
const withReveal = require('react-reveal/withReveal');

const LanguageSwitch: React.FC = () => {
  const localStorageLanguage = localStorage.getItem('language') as LanguageType;
  const [language, setLanguage] = useState<LanguageType | string>(
    localStorageLanguage?.length ? localStorageLanguage : i18n.language,
  );
  const [t] = useTranslation();

  const onSwitchChange = () => {
    const targetLanguage = language === locales.ru ? locales.en : locales.ru;

    localStorage.setItem('language', targetLanguage);
    setLanguage(targetLanguage);
    i18n.changeLanguage(targetLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    document.title = t('main.name');
  });

  return (
    <LanguageSwitchStyle language={language}>
      <Switch
        checked={language === locales.ru}
        defaultChecked
        onChange={onSwitchChange}
      />
    </LanguageSwitchStyle>
  );
};

export default withReveal(LanguageSwitch, <Fade right />);
