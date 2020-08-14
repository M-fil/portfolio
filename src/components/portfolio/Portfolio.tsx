import React, {
  useState,
  useEffect,
  MouseEvent,
} from 'react';
import {
  Row as ProjectsGrid,
  Col as ProjectGridItem,
} from 'antd';

import Project from './Project';
import ProjectModal from './ProjectModal';
import { projects } from '../../constants/constants';
import { IProjectObject } from '../../interfaces/interfaces';

const {
  RS_LANG,
} = projects;

const Portfolio: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [clickedProjectId, setClickedProjectId] = useState<string | null>(null);
  const [clickedProjectObject, setClickedProjectObject] = useState<IProjectObject | null>(null);

  useEffect(() => {
    if (clickedProjectId) {
      setClickedProjectObject(projects[clickedProjectId]);
    } else {
      setClickedProjectObject(null);
    }
  }, [clickedProjectId])

  const onVisibleHandler = (event: MouseEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLAnchorElement).closest('.project__more-button');
    if (target) {
      event.preventDefault();
      const projectParentElement = (target as HTMLAnchorElement).closest('[data-project-id]');
      const projectId = (projectParentElement as HTMLDivElement).dataset.projectId;

      setIsModalVisible(!!projectId);
      setClickedProjectId(projectId as string);
    }
  }

  const onCloseModal = (event: MouseEvent<HTMLElement>) => {
    setIsModalVisible(false);
    setClickedProjectId(null);
  }

  return (
    <div onClick={onVisibleHandler}>
      <ProjectModal
        title={clickedProjectObject?.name || ''}
        isVisible={isModalVisible}
        onCancel={onCloseModal}
      />
      {Object.entries(projects).map((project) => {
        return (
          <Project
            key={project[0]}
            project={project[1]}
            projectId={project[0]}
          />
        );
      })}
    </div>
  )
}

export default Portfolio;
