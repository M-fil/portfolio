import React from 'react';

import { icons } from '../constants/constants';
import {
  ToolType,
  LinksKeyType,
} from '../interfaces/interfaces';

const getToolIconByName = (iconName: ToolType) => {
  switch (iconName) {
    case 'SCSS':
      return (<i className="fab fa-sass"></i>);
    case 'JavaScript':
    default:
      return (<i className="fab fa-js"></i>);
    case 'React':
      return (<i className="fab fa-react"></i>);
    case 'Redux':
      return icons.REDUX;
    case 'TypeScript':
      return icons.TYPESCRIPT;
  }
};

const getLinkIconByName = (linkIconName: LinksKeyType) => {
  switch (linkIconName) {
    case 'github':
      return (<i className="fab fa-github"></i>);
    case 'demo':
    default:
      return (<i className="fas fa-external-link-alt"></i>);
  }
};

export {
  getToolIconByName,
  getLinkIconByName,
}