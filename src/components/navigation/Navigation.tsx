import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import NavigationItem from './styled/NavigationItem';

const Navigation: React.FC = () => {
  const [t] = useTranslation();

  return (
    <div className="navigation">
      <NavLink to="/">{t('navigation.main')}</NavLink>
      <NavLink to="/about">{t('navigation.about')}</NavLink>
      <NavLink to="/portfolio">{t('navigation.portfolio')}</NavLink>
      <NavLink to="/career">{t('navigation.career')}</NavLink>
      <NavLink to="/comments">{t('navigation.comments')}</NavLink>
      <NavLink to="/contacts">{t('navigation.contacts')}</NavLink>

      <div className="navigation__person">
        <div className="person__name">{t('navigation.name')}</div>
        <div className="person__activity">{t('navigation.activity')}</div>
      </div>
    </div>
  )
}

export default Navigation;
