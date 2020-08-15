import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import NavigationStyle from './styled/NavigationStyle';

const Navigation: React.FC = () => {
  const [t] = useTranslation();

  return (
    <NavigationStyle>
      <Menu className="navigation__menu">
        <Menu.Item>
          <NavLink to="/">{t('navigation.main')}</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/about">{t('navigation.about')}</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/portfolio">{t('navigation.portfolio')}</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/career">{t('navigation.career')}</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/comments">{t('navigation.comments')}</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/contacts">{t('navigation.contacts')}</NavLink>
        </Menu.Item>
      </Menu>

      <div className="navigation__person">
        <h2 className="person__name">{t('navigation.name')}</h2>
        <h4 className="person__activity">{t('navigation.activity')}</h4>
      </div>
    </NavigationStyle>
  )
}

export default Navigation;
