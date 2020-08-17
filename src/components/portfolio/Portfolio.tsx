import React, {
  useState,
  useEffect,
  MouseEvent,
} from 'react';

import Project from './Project';
import ProjectModal from './ProjectModal';
import PortfolioStyle from './styled/PortfolioStyle';
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
    <PortfolioStyle>
      <div className="projects__list" onClick={onVisibleHandler}>
        <ProjectModal
          project={clickedProjectObject}
          isVisible={isModalVisible}
          onCancel={onCloseModal}
        />
        {Object.entries(projects).map((project, index) => (
          <Project
            key={project[0]}
            index={index}
            project={project[1]}
            projectId={project[0]}
          />
        ))}
      </div>
      <Project
        index={1}
        project={projects.RS_LANG}
        projectId="projects.RS_LANG"
      />
      <Project
        index={2}
        project={projects.RS_LANG}
        projectId="projects.RSfd_LANG"
      />
      <Project
        index={3}
        project={projects.RS_LANG}
        projectId="prsdojects.RS_LANG"
      />
      <Project
        index={4}
        project={projects.RS_LANG}
        projectId="projectfdsfs.RS_LANG"
      />
    </PortfolioStyle>
  );
};

export default Portfolio;
