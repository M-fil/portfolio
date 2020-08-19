import {
  IProjectObject,
  ICommentAuthor,
  ToolType,
  IContactLink,
  IScreenResolution,
} from '../interfaces/interfaces';

import PERSON_IMAGE_1_URL from '../assets/images/person/person-1.png';
import PERSON_IMAGE_2_URL from '../assets/images/person/person-2.png';
import REDUX from '../assets/images/tools/redux.svg';
import TYPESCRIPT from '../assets/images/tools/typescript.svg';
import RS_LOGO from '../assets/images/steps/rs-logo.png';
import EPAM_LOGO from '../assets/images/steps/epam-logo.png';
import REACT_TESTING_LIBRARY from '../assets/images/tools/react-testing-library.png';

const urls: {
  [propName: string]: string,
} = {
  PROJECT_URL: 'https://raw.githubusercontent.com/M-fil/data-storage/master/my-portfolio/projects/projects.json',
  PERSON_IMAGE_1_URL,
  PERSON_IMAGE_2_URL,
  CV_LINK_URL: 'https://drive.google.com/file/d/1G0xogM0rIs7q5GnWM7rIlALGv7tVEfbe/view?usp=sharing',
  PERSONAL_GITHUB_URL: 'https://api.github.com/users/M-fil',
  RS_LOGO,
  EPAM_LOGO,
  RUSSIA_FLAG: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg',
  ENGLAND_FLAG: 'https://images-na.ssl-images-amazon.com/images/I/2102hNwuHyL._AC_.jpg',
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
  },
  navigation: {
    textColor: '#EBEBEB',
    activityColor: '#254054',
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
  [propName: string]: number;
} = {
  BOOL_ARRAY_LENGTH_FOR_CONTACST_ANIMATION: 4,
};

const skills: {
  [propName: string]: {
    text: ToolType,
    percentage: number,
  },
} = {
  JAVASCRIPT: {
    text: 'JavaScript',
    percentage: 90,
  },
  HTML: {
    text: 'HTML',
    percentage: 90,
  },
  CSS: {
    text: 'CSS',
    percentage: 90,
  },
  SCSS: {
    text: 'SCSS',
    percentage: 90,
  },
  REACT: {
    text: 'React',
    percentage: 75,
  },
  REDUX: {
    text: 'Redux',
    percentage: 60,
  },
  TYPESCRIPT: {
    text: 'TypeScript',
    percentage: 50,
  },
  TESTING_LIBRARIES: {
    text: 'React Testing Library & Jest',
    percentage: 40,
  },
  ENGLISH_LEVEL: {
    text: 'English: B1 (Intermediate)',
    percentage: 50,
  },
};

const skillChartConstants: {
  [propName: string]: string,
} = {
  BORDER_WIDTH: '10px',
  DEFAULT_BORDER_COLOR: '#16222E',
  DEFAULT_INNER_COLOR: '#F0F0F0',
};

const contactsLinks: {
  [propName: string]: IContactLink;
} = {
  vk: {
    link: 'https://vk.com/m__fil',
    name: 'VK',
    iconClassName: 'fab fa-vk',
    color: '#4A76A8',
  },
  telegram: {
    link: 'https://t.me/Filan0vichMaxim',
    name: 'Telegram',
    iconClassName: 'fab fa-telegram-plane',
    color: '#36AEE2',
  },
  github: {
    link: 'https://github.com/M-fil',
    name: 'GitHub',
    iconClassName: 'fab fa-github',
    color: '#24292E',
  },
  mail: {
    link: 'mailto:maxim_filanovich@mail.ru',
    name: 'Mail.ru',
    iconClassName: 'fas fa-envelope',
    color: '#F19602',
  },
  twitter: {
    link: 'https://twitter.com/8Z64Su3u8Rfe7gf',
    name: 'Twitter',
    iconClassName: 'fab fa-twitter',
    color: '#1DA1F2',
  },
  youtube: {
    link: 'https://www.youtube.com/channel/UC1RYQ3ME3NJkqIAujhDiApA/featured?view_as=subscriber',
    name: 'YouTube',
    iconClassName: 'fab fa-youtube',
    color: '#FF011D',
  },
};

const commentsAuthorsData: {
  [propName: string]: ICommentAuthor;
} = {
  ekaterina_latushkina: {
    image: 'https://avatars3.githubusercontent.com/u/59828320?s=400&u=62c306ebf8b5e25095f9b15cb1138e2c76e6816c&v=4',
    personalPage: 'https://github.com/kate-latushkina',
    rating: 5,
  },
  kirill_zdanov: {
    image: 'https://avatars1.githubusercontent.com/u/25373900?s=400&u=cb269c77132a0c8d07d3daed13dc1ae3d916fe4d&v=4',
    personalPage: 'https://github.com/KirillZhdanov',
    rating: 5,
  },
  alexander_treska: {
    image: 'https://sun9-76.userapi.com/c856020/v856020650/fa149/yjwYxPDb5G8.jpg',
    personalPage: 'https://vk.com/id375319232',
    rating: 5,
  },
  anton_andreev: {
    image: 'https://avatars1.githubusercontent.com/u/36535854?s=400&v=4',
    personalPage: 'https://github.com/toxAndreev',
    rating: 5,
  },
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
  skills,
  skillChartConstants,
  icons,
  colors,
  contactsLinks,
  commentsAuthorsData,
  numberConstants,
  screenResolutions,
  mediaQueries,
};
