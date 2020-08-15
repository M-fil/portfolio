export type ToolType = 'JavaScript' | 'React' | 'Redux' | 'TypeScript' | 'SCSS' | 'HTML';
export type LinksKeyType = 'github' | 'demo';
export type ActionTypesType = 'loading' | 'error' | 'success';
export type StepKeyType = 'php' | 'js-self-education' | 'rs-js-single-projects' 
  | 'rs-js-team-projects' | 'rs-js-course-finish' | 'epam-fail' | 'rs-react';

enum Options {
  GITHUB = 'github',
  DEMO = 'demo',
};

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
    [key in Options]: string;
  };
  tools: ToolType[];
  images: string[];
  isMoreThanOneCollaborator: boolean;
};

export interface IDefaultState {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
};

export interface ISideBlockStyles {
  rightBlockWidth: string;
  leftBlockWidth: string;
  personImageLeft: string | number;
};

