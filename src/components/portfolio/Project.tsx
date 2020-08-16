import React from 'react';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { createFromIconfontCN } from '@ant-design/icons';

import {
  IProjectObject,
} from '../../interfaces/interfaces';
import ProjectStyle from './styled/ProjectStyle';
import { LinksBadges, ToolsBadges } from './Badges';
import Slider from './Slider';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  ],
});

interface IProject {
  project: IProjectObject;
  projectId: string;
}

const Project: React.FC<IProject> = ({
  project, projectId,
}) => {
  const [t] = useTranslation();

  return (
    <ProjectStyle>
      <Card
        title={project.name}
        cover={(
          <Slider
            project={project}
            arrows={false}
            autoplay
            autoplaySpeed={2000}
          />
        )}
        data-project-id={projectId}
        extra={(
          <a className="project__more-button" href="/">
            {t('portfolio.more-button')}
            <IconFont type="icon-tuichu" />
          </a>
        )}
      >
        <div className="project__description">
          {project.description}
        </div>
        <LinksBadges project={project} />
        <ToolsBadges project={project} />
      </Card>
    </ProjectStyle>
  );
};

export default Project;
