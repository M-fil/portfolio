import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import NavigationStyle from './styled/NavigationStyle';
import { ISideBlockStyles } from '../../interfaces/interfaces';

const Fade = require('react-reveal/Fade');
const withReveal = require('react-reveal/withReveal');

interface INavigation<T> {
  setStyles: (prop: T) => void;
  setIsMenuOpened: (prop: boolean) => void;
}

const Navigation: React.FC<INavigation<ISideBlockStyles>> = ({
  setStyles,
  setIsMenuOpened,
}) => {
  const [t] = useTranslation();
  const [selectedKey, setSelectedKey] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    setSelectedKey(location.pathname === '/' ? '/' : location.pathname.slice(1));
    setIsMenuOpened(false);

    if (location.pathname !== '/') {
      setStyles({
        rightBlockWidth: '70%',
        leftBlockWidth: '30%',
      });
    } else {
      setStyles({
        rightBlockWidth: '50%',
        leftBlockWidth: '50%',
      });
    }
  }, [location]);

  return (
    <NavigationStyle>
      <Menu
        className="navigation__menu"
        selectedKeys={[selectedKey]}
      >
        <Menu.Item key="/">
          <NavLink to="/" exact>
            {t('navigation.main')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="about">
          <NavLink to="/about">
            {t('navigation.about')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="portfolio">
          <NavLink to="/portfolio">
            {t('navigation.portfolio')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="career">
          <NavLink to="/career">
            {t('navigation.career')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="comments">
          <NavLink to="/comments">
            {t('navigation.comments')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="contacts">
          <NavLink to="/contacts">
            {t('navigation.contacts')}
          </NavLink>
        </Menu.Item>
      </Menu>
    </NavigationStyle>
  );
};

export default withReveal(Navigation, <Fade left />);
