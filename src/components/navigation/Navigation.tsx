import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import NavigationItem from './styled/NavigationItem';

const Navigation: React.FC = () => {
  const [t] = useTranslation();

  return (
    <div className="navigation">
      <Menu>
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
        <div className="person__name">{t('navigation.name')}</div>
        <div className="person__activity">{t('navigation.activity')}</div>
      </div>
    </div>
  )
}

export default Navigation;
