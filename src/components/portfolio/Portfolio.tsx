import React, {
  useState,
  useEffect,
  MouseEvent,
} from 'react';

import Project from './Project';
import ProjectModal from './ProjectModal';
import { projects } from '../../constants/constants';
import { IProjectObject } from '../../interfaces/interfaces';

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
  }, [clickedProjectId]);

  const onVisibleHandler = (event: MouseEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLAnchorElement).closest('.project__more-button');
    if (target) {
      event.preventDefault();
      const projectParentElement = (target as HTMLAnchorElement).closest('[data-project-id]');
      const { projectId } = (projectParentElement as HTMLDivElement).dataset;

      setIsModalVisible(!!projectId);
      setClickedProjectId(projectId as string);
    }
  };

  const onCloseModal = (event: MouseEvent<HTMLElement>) => {
    setIsModalVisible(false);
    setClickedProjectId(null);
  };

  return (
    <div className="projects__list" onClick={onVisibleHandler}>
      <ProjectModal
        project={clickedProjectObject}
        isVisible={isModalVisible}
        onCancel={onCloseModal}
      />
      {Object.entries(projects).map((project) => (
        <Project
          key={project[0]}
          project={project[1]}
          projectId={project[0]}
        />
      ))}
    </div>
  );
};

export default Portfolio;
