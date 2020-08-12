import React from 'react';
import { useTranslation } from 'react-i18next';

import NavigationItem from './styled/NavigationItem';

const Navigation: React.FC = () => {
  const [t] = useTranslation();

  return (
    <div className="navigation">
      <NavigationItem>{t('navigation.main')}</NavigationItem>
      <NavigationItem>{t('navigation.about')}</NavigationItem>
      <NavigationItem>{t('navigation.portfolio')}</NavigationItem>
      <NavigationItem>{t('navigation.career')}</NavigationItem>
      <NavigationItem>{t('navigation.comments')}</NavigationItem>
      <NavigationItem>{t('navigation.contacts')}</NavigationItem>
    </div>
  )
}

export default Navigation;
