import React, {
  useState,
  MouseEvent,
} from 'react';
import { Card, Badge } from 'antd';
import { useTranslation } from 'react-i18next';
import { createFromIconfontCN } from '@ant-design/icons';
import {
  getLinkIconByName,
  getToolIconByName,
} from '../../utils/getters';

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
  projectId: string;
};

const Project: React.FC<IProject> = ({
  project, projectId,
}) => {
  const [t] = useTranslation();

  return (
  <ProjectStyle>
    <Card
        title={project.name}
        data-project-id={projectId}
        extra={
          <a className="project__more-button" href="/">
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
            <Badge key={link[1]} title={link[0]}>
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
