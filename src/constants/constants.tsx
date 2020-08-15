import {
  IProjectObject,
} from '../interfaces/interfaces';

import PERSON_IMAGE_1_URL from '../assets/images/person/person-1.png';
import PERSON_IMAGE_2_URL from '../assets/images/person/person-2.png';
import REDUX from '../assets/images/tools/redux.svg';
import TYPESCRIPT from '../assets/images/tools/typescript.svg';

const urls: {
  [propName: string]: string,
} = {
  PERSON_IMAGE_1_URL,
  PERSON_IMAGE_2_URL,
  CV_LINK_URL: 'https://drive.google.com/file/d/1G0xogM0rIs7q5GnWM7rIlALGv7tVEfbe/view?usp=sharing',
  RS_LANG_PATH_TO_PROJECTS: 'https://raw.githubusercontent.com/M-fil/data-storage/master/my-portfolio/projects/',
  PERSONAL_GITHUB_URL: 'https://api.github.com/users/M-fil',
};

const colors: {
  [propName: string]: { [propName: string]: string };
} = {
  portfolio: {
    javascriptIconColor: '#F7DF1E',
    reactIconColor: '#6EDDFB',
    scssIconColor: '#CD6799',
    htmlIconColor: '#E44D26',
    toolIconBackground: '#ffffff',
    toolIconBorderColor: '#CCCCCC',
    githubIconColor: '#24292E',
    demoIconColor: '#1890FF',
    linkIconBackground: '#ffffff',
    arrowButtonColor: '#0091FF',
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
    textColor: '#EBEBEB',
  }
};

const icons: {
  [propName: string]: string,
} = {
  REDUX,
  TYPESCRIPT,
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
    text: string,
    percentage: number,
  },
} = {
  JAVASCRIPT: {
    text: 'JavaScript',
    percentage: 50,
  },
  HTML: {
    text: 'HTML',
    percentage: 50,
  },
  CSS: {
    text: 'CSS',
    percentage: 50,
  },
  SCSS: {
    text: 'SCSS',
    percentage: 50,
  },
  REACT: {
    text: 'React',
    percentage: 50,
  },
  REDUX: {
    text: 'Redux',
    percentage: 50,
  },
  TYPESCRIPT: {
    text: 'TypeScript',
    percentage: 50,
  },
  TESTING_LIBRARIES: {
    text: 'React Testing Library & Jest',
    percentage: 50,
  },
  ENGLISH_LEVEL: {
    text: 'B1 (Intermediate)',
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
    },
    tools: ['JavaScript', 'SCSS', 'HTML'],
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
};
