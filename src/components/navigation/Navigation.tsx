import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import NavigationStyle from './styled/NavigationStyle';
import { ISideBlockStyles } from '../../interfaces/interfaces';

const Fade = require('react-reveal/Fade');
const withReveal = require('react-reveal/withReveal');

interface INavigation<T> {
  setStyles: (prop: T) => void;
}

const Navigation: React.FC<INavigation<ISideBlockStyles>> = ({
  setStyles,
}) => {
  const [t] = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setStyles({
        rightBlockWidth: '70%',
        leftBlockWidth: '30%',
        personImageLeft: '-40%',
      });
    } else {
      setStyles({
        rightBlockWidth: '50%',
        leftBlockWidth: '50%',
        personImageLeft: 0,
      });
    }
  }, [location]);

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
  );
};

export default withReveal(Navigation, <Fade left />);
