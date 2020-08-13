export type ToolType = 'JavaScript' | 'React' | 'Redux' | 'TypeScript' | 'SCSS';
export type LinksKeyType = 'github' | 'demo';

enum Options {
  GITHUB = 'github',
  DEMO = 'demo',
};

export interface IProjectObject {
  name: string;
  description: string;
  links: {
    [key in Options]: string;
  };
  tools: ToolType[],
};
