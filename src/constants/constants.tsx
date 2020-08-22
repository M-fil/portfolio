import { IScreenResolution, TitleLevelType } from '../interfaces/interfaces';

import PERSON_IMAGE_1_URL from '../assets/images/person/person.png';
import REDUX from '../assets/images/tools/redux.svg';
import TYPESCRIPT from '../assets/images/tools/typescript.svg';
import RS_LOGO from '../assets/images/steps/rs-logo.png';
import EPAM_LOGO from '../assets/images/steps/epam-logo.png';
import INNOWISE_GROUP_LOGO from '../assets/images/steps/innowise-group.png';
import REACT_TESTING_LIBRARY from '../assets/images/tools/react-testing-library.png';

const urls: {
  [propName: string]: string,
} = {
  PROJECT_URL: 'https://raw.githubusercontent.com/M-fil/data-storage/master/my-portfolio/projects/projects.json',
  SKILLS_URL: 'https://raw.githubusercontent.com/M-fil/data-storage/master/my-portfolio/skills/skills.json',
  CONTACTS_URL: 'https://raw.githubusercontent.com/M-fil/data-storage/master/my-portfolio/contacts/contacts.json',
  COMMENTS_URL: 'https://raw.githubusercontent.com/M-fil/data-storage/master/my-portfolio/comments/comments.json',
  PERSON_IMAGE_1_URL,
  CV_LINK_URL: 'https://drive.google.com/file/d/1G0xogM0rIs7q5GnWM7rIlALGv7tVEfbe/view?usp=sharing',
  PERSONAL_GITHUB_URL: 'https://api.github.com/users/M-fil',
  RS_LOGO,
  INNOWISE_GROUP_LOGO,
  EPAM_LOGO,
  RUSSIA_FLAG: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg',
  BRITAIN_FLAG: 'https://flagof.ru/wp-content/uploads/2018/10/flag_en_big.jpg',
  PERSONAL_TELEGRAM_LINK: '"https://t.me/Filan0vichMaxim',
  GITHUB_GET_TEAMMATES_QUERY: 'GET /repos/{owner}/{repo}/collaborators',
};

const colors: {
  [propName: string]: { [propName: string]: string };
} = {
  portfolio: {
    javascriptIconColor: '#F7DF1E',
    reactIconColor: '#6EDDFB',
    scssIconColor: '#CD6799',
    cssIconColor: '#264DE4',
    htmlIconColor: '#E44D26',
    phpIconColor: '#7478AE',
    languageIconColor: '#4C6EF5',
    toolIconBackground: '#ffffff',
    toolIconBorderColor: '#CCCCCC',
    githubIconColor: '#24292E',
    demoIconColor: '#1890FF',
    linkIconBackground: '#ffffff',
    arrowButtonColor: '#0091FF',
    reactTestingLibraryIconColor: '#F7630C',
    reduxIconColor: '#7348B7',
    typescriptIconColor: '#007ACC',
    youtubeIconColor: '#FF011D',
  },
  navigation: {
    textColor: '#EBEBEB',
    activityColor: '#254054',
    toolText: '#324154',
  },
  mainPage: {
    darkSideBackground: '#1D242E',
    lightSideBackground: '#EBEBEB',
    textColor: '#EBEBEB',
    activityColor: '#254054',
    nameColor: '#254054',
    overlayBackground: 'rgba(19, 19, 19, 0.3)',
  },
  footer: {
    backgroundColor: '#EBEBEB',
    topBorderColor: '#1D242E',
    textColor: '#1D242E',
  },
  about: {
    textColor: '#748898',
    pieChartColor: '#1D242E',
    trailColor: '#B9BABE',
  },
  scrollBar: {
    color: '#707070',
  },
  career: {
    failColor: '#FF0000',
  },
};

const icons: {
  [propName: string]: string,
} = {
  REDUX,
  TYPESCRIPT,
  REACT_TESTING_LIBRARY,
};

const personalData: {
  [propName: string]: string | number,
} = {
  DATE_OF_BIRTH: '10-12-2001',
  FULL_NAME: 'Maxim Filanovich',
  GITHUB_LOGIN: 'M-fil',
  PERSONAL_TOOL_TEXT: 'JS',
  PHONE_NUMBER: '+375(44) 513-45-15',
  PHONE_NUMBER_HREF: 'tel:+375445134515',
};

const dateConstants: {
  [propName: string]: number,
} = {
  MILISECONDS_PER_SECOND: 1000,
  SECONDS_PER_MINUTE: 60,
  HOURS_PER_DAY: 24,
  AVERARGE_DAYS_PER_YEAR: 365.25,
};

const numberConstants: {
  [propName: string]: number | TitleLevelType;
} = {
  BOOL_ARRAY_LENGTH_FOR_CONTACST_ANIMATION: 4,
  CONTACT_BLOCK_SIZE: 150,
  CONTACT_TITLE_LEVEL: 2,
  DEFAULT_SCALING: 1.5,
  DEFAULT_AVATAR_SIZE: 70,
  ERROR_TITLE_LEVEL: 2,
  PROJECT_FADE_ANIMATION_DURATION: 700,
};

const skillChartConstants: {
  [propName: string]: string | number,
} = {
  BORDER_WIDTH: 10,
  DEFAULT_BORDER_COLOR: '#16222E',
  DEFAULT_INNER_COLOR: '#F0F0F0',
};

const screenResolutions: IScreenResolution = {
  labptopL: '1440px',
  mediaLaptop: '1024px',
  mediaTablet: '768px',
  mediaMobile: '425px',
  mediaMobileSmall: '320px',
};

const mediaQueries: {
  [propName: string]: string;
} = {
  labptopL: `(max-width: ${screenResolutions.labptopL})`,
  mediaLaptop: `(max-width: ${screenResolutions.mediaLaptop})`,
  mediaTablet: `(max-width: ${screenResolutions.mediaTablet})`,
  mediaMobile: `(max-width: ${screenResolutions.mediaMobile})`,
  mediaMobileSmall: `(max-width: ${screenResolutions.mediaMobileSmall})`,
};
export {
  personalData,
  dateConstants,
  urls,
  skillChartConstants,
  icons,
  colors,
  numberConstants,
  screenResolutions,
  mediaQueries,
};
