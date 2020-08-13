import React from 'react';
import {
  Row as ProjectsGrid,
  Col as ProjectGridItem,
} from 'antd';

import Project from './Project';
import { projects } from '../../constants/constants';

const {
  RS_LANG,
} = projects;

const Portfolio: React.FC = () => {
  return (
    <div>
      <ProjectsGrid gutter={[16, 16]}>
        <ProjectGridItem span={6}>
          <Project project={RS_LANG} />
        </ProjectGridItem>
        <ProjectGridItem span={6}>
          Hello
        </ProjectGridItem>
        <ProjectGridItem span={6}>
          Hello
        </ProjectGridItem>
        <ProjectGridItem span={6}>
          Hello
        </ProjectGridItem>
      </ProjectsGrid>
    </div>
  )
}

export default Portfolio;
