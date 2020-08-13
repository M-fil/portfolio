import {
  IProjectObject,
} from '../interfaces/interfaces';

import PERSON_IMAGE_1_URL from '../assets/images/person/person-1.png';
import PERSON_IMAGE_2_URL from '../assets/images/person/person-2.png';
import SCSS from '../assets/images/tools/scss.svg';
import JS from '../assets/images/tools/js.svg';
import REACT from '../assets/images/tools/react.svg';
import REDUX from '../assets/images/tools/redux.svg';
import TYPESCRIPT from '../assets/images/tools/typescript.svg';

const urls: {
  [propName: string]: string,
} = {
  PERSON_IMAGE_1_URL,
  PERSON_IMAGE_2_URL,
}

const icons: {
  [propName: string]: string,
} = {
  SCSS,
  JS,
  REACT,
  REDUX,
  TYPESCRIPT,
};

const personalData: {
  [propName: string]: string | number,
} = {
  DATE_OF_BIRTH: '10-12-2001',
  FULL_NAME: 'Maxim Filanovich',
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
    description: '',
    links: {
      github: 'https://github.com/M-fil/rslang',
      demo: 'https://rslang-team18-m-fil.netlify.app/',
    },
    tools: ['JavaScript', 'SCSS'],
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
};
