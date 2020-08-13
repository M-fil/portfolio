import React from 'react';
import { Card, Badge } from 'antd';
import { useTranslation } from 'react-i18next';
import { createFromIconfontCN } from '@ant-design/icons';

import { icons } from '../../constants/constants';
import {
  IProjectObject,
  ToolType,
  LinksKeyType,
} from '../../interfaces/interfaces';
import ProjectStyle from './styled/ProjectStyle';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  ],
});

interface IProject {
  project: IProjectObject;
};

const Project: React.FC<IProject> = ({
  project,
}) => {
  const [t] = useTranslation();

  const getToolIconByName = (iconName: ToolType) => {
    switch (iconName) {
      case 'SCSS':
        return (<i className="fab fa-sass"></i>);
      case 'JavaScript':
      default:
        return (<i className="fab fa-js"></i>);
      case 'React':
        return (<i className="fab fa-react"></i>);
      case 'Redux':
        return icons.REDUX;
      case 'TypeScript':
        return icons.TYPESCRIPT;
    }
  };

  const getLinkIconByName = (linkIconName: LinksKeyType) => {
    switch (linkIconName) {
      case 'github':
        return (<i className="fab fa-github"></i>);
      case 'demo':
      default:
        return (<i className="fas fa-external-link-alt"></i>);
    }
  }
  
  return (
  <ProjectStyle>
    <Card
        title={project.name}
        extra={
          <a href="/">
            {t('portfolio.more-button')}
            <IconFont type="icon-tuichu" />
          </a>
        }
      >
        <div className="project__description">
          {project.description}
        </div>
        <div className="project__links">
          {Object.entries(project.links).map((link) => (
            <Badge title={link[0]}>
              <a href={link[1]} target="_blank">
                { getLinkIconByName(link[0] as LinksKeyType)}
              </a>
            </Badge>
          ))}
        </div>
        <div className="project__badges">
          {project.tools.map((badge) => (
            <Badge title={badge} key={badge}>
              {badge === 'Redux' || badge === 'TypeScript' ?
              <img
                className="badge__icon"
                src={getToolIconByName(badge) as string}
                alt={badge}
              />
              : getToolIconByName(badge)
              }
            </Badge>
          ))}
        </div>
      </Card>
    </ProjectStyle>
  )
}

export default Project;
