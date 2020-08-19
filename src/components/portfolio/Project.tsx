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

const Fade = require('react-reveal/Fade');

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  ],
});

interface IProject {
  project: IProjectObject;
  projectId: string;
  index: number;
}

const Project: React.FC<IProject> = ({
  project, projectId, index,
}) => {
  const [t] = useTranslation();

  return (
    <Fade left={index % 2 === 0} right={index % 2 !== 0} duration={700}>
      <ProjectStyle>
        <Card
          title={project.name}
          cover={(
            <Slider
              project={project}
              arrows={false}
              pauseOnHover
              autoplay
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
          <LinksBadges project={project} />
          <ToolsBadges project={project} />
        </Card>
      </ProjectStyle>
    </Fade>
  );
};

export default Project;
