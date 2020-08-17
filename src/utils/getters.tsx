import React from 'react';

import { icons, colors, contactsLinks } from '../constants/constants';
import {
  ToolType,
  LinksKeyType,
} from '../interfaces/interfaces';

const {
  javascriptIconColor,
  reactIconColor,
  scssIconColor,
  htmlIconColor,
  githubIconColor,
  demoIconColor,
} = colors.portfolio;

const {
  youtube,
} = contactsLinks;

const getToolIconByName = (iconName: ToolType) => {
  switch (iconName) {
    case 'HTML':
      return (<i style={{ color: htmlIconColor }} className="fab fa-html5" />);
    case 'SCSS':
      return (<i style={{ color: scssIconColor }} className="fab fa-sass" />);
    case 'JavaScript':
    default:
      return (<i style={{ color: javascriptIconColor }} className="fab fa-js" />);
    case 'React':
      return (<i style={{ color: reactIconColor }} className="fab fa-react" />);
    case 'Redux':
      return icons.REDUX;
    case 'TypeScript':
      return icons.TYPESCRIPT;
  }
};

const getLinkIconByName = (linkIconName: LinksKeyType) => {
  switch (linkIconName) {
    case 'github':
      return (<i style={{ color: githubIconColor }} className="fab fa-github" />);
    case 'youtube':
      return (<i style={{ color: youtube.color }} className="fab fa-youtube" />);
    case 'demo':
    default:
      return (<i style={{ color: demoIconColor }} className="fas fa-external-link-alt" />);
  }
};

export {
  getToolIconByName,
  getLinkIconByName,
};
