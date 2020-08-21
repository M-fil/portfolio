import actions from '../reducer/actions';

export type ToolType = 'JavaScript' | 'React' | 'Redux'
  | 'TypeScript' | 'CSS' | 'SCSS' | 'HTML' |
  'React Testing Library & Jest' | 'English: B1 (Intermediate)';
export type LinksKeyType = 'github' | 'demo' | 'youtube';
export type ActionTypesType = 'loading' | 'error' | 'success';
export type StepKeyType = 'php' | 'js-self-education' | 'rs-js-single-projects'
  | 'rs-js-team-projects' | 'rs-js-course-finish' | 'epam-fail' | 'rs-react';
export type LanguageType = 'RU' | 'EN';
export type TitleLevelType= 1 | 2 | 3 | 4 | undefined;

export interface ITeammate {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface IProjectObject {
  name: string;
  key: string;
  links: {
    [propName: string]: string;
  };
  tools: ToolType[];
  images: string[];
  isMoreThanOneCollaborator: boolean;
  video?: string;
}

export interface ISideBlockStyles {
  rightBlockWidth: string;
  leftBlockWidth: string;
  isMainPage: boolean;
}

export interface ICommentAuthor {
  image: string;
  personalPage: string;
  rating: number;
}

export interface IContactLink {
  link: string;
  name: string;
  iconClassName: string;
  color: string;
}

export interface IScreenResolution {
  labptopL: string;
  mediaLaptop: string;
  mediaTablet: string;
  mediaMobile: string;
  mediaMobileSmall: string;
}

export interface IPieChartStyle {
  width: number,
  strokeWidth: number,
}

export interface IState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  data: any;
}

export interface IActionPayload {
  type: keyof typeof actions;
  payload?: any;
}

export interface ISkill {
  percentage: number;
  text: ToolType;
}
