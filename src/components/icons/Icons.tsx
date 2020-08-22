import React from 'react';
import { colors } from '../../constants/constants';

const {
  javascriptIconColor,
  reactIconColor,
  phpIconColor,
} = colors.portfolio;

interface IIcon {
  classes?: string[];
}

interface IImageIcon {
  src: string;
  classes?: string[];
}

const PHPIcon: React.FC<IIcon> = ({ classes }) => (
  <i
    className={`fab fa-php${classes ? ` ${classes.join(' ')}` : ''}`}
    style={{ color: phpIconColor }}
  />
);

const JSIcon: React.FC<IIcon> = ({ classes }) => (
  <i
    className={`fab fa-js${classes ? ` ${classes.join(' ')}` : ''}`}
    style={{ color: javascriptIconColor }}
  />
);

const ReactIcon: React.FC<IIcon> = ({ classes }) => (
  <i
    className={`fab fa-react${classes ? ` ${classes.join(' ')}` : ''}`}
    style={{ color: reactIconColor }}
  />
);

const ImageIcon: React.FC<IImageIcon> = ({ src, classes }) => (
  <img
    className={classes?.join(' ') || ''}
    src={src}
    alt={src}
  />
);

export {
  PHPIcon,
  JSIcon,
  ReactIcon,
  ImageIcon,
};
