import React from 'react';
import { JsxElement } from 'typescript';

import {
  icons,
  colors,
  contactsLinks,
  numberConstants,
} from '../constants/constants';
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
  cssIconColor,
  languageIconColor,
  reactTestingLibraryIconColor,
  reduxIconColor,
  typescriptIconColor,
} = colors.portfolio;

const {
  youtube,
} = contactsLinks;

const {
  BOOL_ARRAY_LENGTH_FOR_CONTACST_ANIMATION,
} = numberConstants;

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
    case 'CSS':
      return (<i style={{ color: cssIconColor }} className="fab fa-css3-alt" />);
    case 'English: B1 (Intermediate)':
      return (<i style={{ color: languageIconColor }} className="fas fa-globe-americas" />);
    case 'React Testing Library & Jest':
      return icons.REACT_TESTING_LIBRARY;
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

const getIconColorByName = (iconName: ToolType): string => {
  switch (iconName) {
    case 'HTML':
      return htmlIconColor;
    case 'SCSS':
      return scssIconColor;
    case 'JavaScript':
    default:
      return javascriptIconColor;
    case 'React':
      return reactIconColor;
    case 'CSS':
      return cssIconColor;
    case 'English: B1 (Intermediate)':
      return languageIconColor;
    case 'React Testing Library & Jest':
      return reactTestingLibraryIconColor;
    case 'Redux':
      return reduxIconColor;
    case 'TypeScript':
      return typescriptIconColor;
  }
};

const getRandomInteger = (min: number, max: number): number => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getBoolArrayWithOneTrueValue = (
  arrayLength: number = BOOL_ARRAY_LENGTH_FOR_CONTACST_ANIMATION,
): boolean[] => {
  const randomInteger: number = getRandomInteger(0, arrayLength - 1);
  const boolArray: boolean[] = Array.from({
    length: arrayLength,
  }).map((_, index) => (index === randomInteger));

  return boolArray;
};

const getNAmountOfElement = (element: any, times: number) => Array
  .from({ length: times })
  .map((_) => element);

export {
  getToolIconByName,
  getLinkIconByName,
  getIconColorByName,
  getRandomInteger,
  getBoolArrayWithOneTrueValue,
  getNAmountOfElement,
};
