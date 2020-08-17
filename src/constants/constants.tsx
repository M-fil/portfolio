import {
  IProjectObject,
  ICommentAuthor,
  ToolType,
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
  PERSON_IMAGE_1_URL,
  PERSON_IMAGE_2_URL,
  CV_LINK_URL: 'https://drive.google.com/file/d/1G0xogM0rIs7q5GnWM7rIlALGv7tVEfbe/view?usp=sharing',
  RS_LANG_PATH_TO_PROJECTS: 'https://raw.githubusercontent.com/M-fil/data-storage/master/my-portfolio/projects/',
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

const projects: {
  [propName: string]: IProjectObject,
} = {
  RS_LANG: {
    name: 'RS Lang',
    key: 'rslang',
    description: '',
    links: {
      github: 'https://github.com/M-fil/rslang',
      demo: 'https://rslang-team18-m-fil.netlify.app/',
      youtube: 'https://youtu.be/XDqg_2ExX4E',
    },
    tools: ['HTML', 'SCSS', 'JavaScript'],
    images: [
      `${urls.RS_LANG_PATH_TO_PROJECTS}images/rslang/rslang_1.png`,
      `${urls.RS_LANG_PATH_TO_PROJECTS}images/rslang/rslang_2.png`,
      `${urls.RS_LANG_PATH_TO_PROJECTS}images/rslang/rslang_3.png`,
      `${urls.RS_LANG_PATH_TO_PROJECTS}images/rslang/rslang_4.png`,
      `${urls.RS_LANG_PATH_TO_PROJECTS}images/rslang/rslang_5.png`,
      `${urls.RS_LANG_PATH_TO_PROJECTS}images/rslang/rslang_6.png`,
      `${urls.RS_LANG_PATH_TO_PROJECTS}images/rslang/rslang_7.png`,
      `${urls.RS_LANG_PATH_TO_PROJECTS}images/rslang/rslang_8.png`,
    ],
    isMoreThanOneCollaborator: true,
    video: 'https://www.youtube.com/embed/XDqg_2ExX4E',
  },
};

const contactsLinks: {
  [propName: string]: {
    link: string;
    name: string;
    iconClassName: string;
    color: string;
  }
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

const commentsAuthorsLinks: {
  [propName: string]: ICommentAuthor;
} = {
  person1: {
    image: 'https://avatars0.githubusercontent.com/u/8600988?s=400&u=0ab0529ad7e6b7013dbeee0c78ba77b71a3eff74&v=4',
    personalPage: 'https://github.com/ShekoMaxim',
  },
  person2: {
    image: 'https://avatars0.githubusercontent.com/u/8600988?s=400&u=0ab0529ad7e6b7013dbeee0c78ba77b71a3eff74&v=4',
    personalPage: 'https://github.com/ShekoMaxim',
  },
  person3: {
    image: 'https://avatars0.githubusercontent.com/u/8600988?s=400&u=0ab0529ad7e6b7013dbeee0c78ba77b71a3eff74&v=4',
    personalPage: 'https://github.com/ShekoMaxim',
  },
  person4: {
    image: 'https://avatars0.githubusercontent.com/u/8600988?s=400&u=0ab0529ad7e6b7013dbeee0c78ba77b71a3eff74&v=4',
    personalPage: 'https://github.com/ShekoMaxim',
  },
};

export {
  personalData,
  dateConstants,
  urls,
  skills,
  skillChartConstants,
  projects,
  icons,
  colors,
  contactsLinks,
  commentsAuthorsLinks,
};
