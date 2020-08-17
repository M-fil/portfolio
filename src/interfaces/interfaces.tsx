export type ToolType = 'JavaScript' | 'React' | 'Redux' | 'TypeScript' | 'SCSS' | 'HTML';
export type LinksKeyType = 'github' | 'demo' | 'youtube';
export type ActionTypesType = 'loading' | 'error' | 'success';
export type StepKeyType = 'php' | 'js-self-education' | 'rs-js-single-projects'
  | 'rs-js-team-projects' | 'rs-js-course-finish' | 'epam-fail' | 'rs-react';
export type LanguageType = 'RU' | 'EN';

enum Options {
  GITHUB = 'github',
  DEMO = 'demo',
  YOUTUBE = 'youtube',
}

export interface ITeammate {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface IProjectObject {
  name: string;
  key: string;
  description: string;
  links: {
    [propName: string]: string;
  };
  tools: ToolType[];
  images: string[];
  isMoreThanOneCollaborator: boolean;
  video?: string;
}

export interface IDefaultState {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
}

export interface ISideBlockStyles {
  rightBlockWidth: string;
  leftBlockWidth: string;
  personImageLeft: string | number;
}
