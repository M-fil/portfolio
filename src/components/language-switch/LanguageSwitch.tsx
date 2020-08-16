import React, {
  useEffect, useState,
} from 'react';
import { Switch } from 'antd';

import locales from '../../i18n/locales';
import LanguageSwitchStyle from './styled/LanguageSwitchStyle';
import i18n from '../../i18n/i18n';
import { SwitchChangeEventHandler } from 'antd/lib/switch';

const LanguageSwitch: React.FC = () => {
  const localStorageLanguage = localStorage.getItem('language');
  const [language, setLanguage] = useState<string>(
    localStorageLanguage?.length ? localStorageLanguage : i18n.language,
  );

  const onSwitchChange = (checked: boolean, event: SwitchChangeEventHandler) => {
    console.log(checked);

    localStorage.setItem('language', 'targetValue');
    setLanguage(locales.ru);
    i18n.changeLanguage(locales.ru);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageSwitchStyle>
      <Switch
        checkedChildren={locales.ru}
        unCheckedChildren={locales.en}
        defaultChecked
      />
    </LanguageSwitchStyle>
  );
};

export default LanguageSwitch;
