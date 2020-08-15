import React, { useEffect, useState } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

import locales from '../../i18n/locales';
import LanguageSwitchStyle from './styled/LanguageSwitchStyle';
import i18n from '../../i18n/i18n';

const LanguageSwitch: React.FC = () => {
  const localStorageLanguage = localStorage.getItem('language');
  const [language, setLanguage] = useState<string>(
    localStorageLanguage?.length ? localStorageLanguage : i18n.language,
  );

  const onRadioSelect = (event: RadioChangeEvent): void => {
    const targetValue = event.target.value;

    localStorage.setItem('language', targetValue);
    setLanguage(targetValue);
    i18n.changeLanguage(targetValue);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageSwitchStyle>
      <Radio.Group
        className="language-swith__radios"
        onChange={onRadioSelect}
        defaultValue={language}
        size="large"
      >
        <Radio
          value={locales.en}
          className="language-swith__radio"
        >
          {locales.en}
        </Radio>
        <Radio
          value={locales.ru}
          className="language-swith__radio"
        >
          {locales.ru}
        </Radio>
      </Radio.Group>
    </LanguageSwitchStyle>
  );
};

export default LanguageSwitch;
