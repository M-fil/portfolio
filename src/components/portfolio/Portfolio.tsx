import React, {
  useState,
  useEffect,
  MouseEvent,
} from 'react';

import Project from './Project';
import ProjectModal from './ProjectModal';
import PortfolioStyle from './styled/PortfolioStyle';
import { IProjectObject } from '../../interfaces/interfaces';
import { urls } from '../../constants/constants';
import { getDataByURL } from '../../service/service';
import useDataWithReducer from '../../custom-hooks/useDataWithReducer';
import useStateCondition from '../../custom-hooks/useStateCondition';

const Portfolio: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [clickedProjectId, setClickedProjectId] = useState<string | null>(null);
  const [clickedProjectObject, setClickedProjectObject] = useState<IProjectObject | null>(null);
  const { state } = useDataWithReducer(
    getDataByURL.bind(null, urls.PROJECT_URL), 'projects',
  );

  useEffect(() => {
    if (clickedProjectId) {
      setClickedProjectObject(state.data[clickedProjectId]);
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

  const onCloseModal = () => {
    setIsModalVisible(false);
    setClickedProjectId(null);
  };

  const projectData = useStateCondition(state, (
    state.data && Object
      .entries(state.data as { [propName: string]: IProjectObject })
      .map((project, index) => (
        <Project
          key={project[0]}
          index={index}
          project={project[1]}
          projectId={project[0]}
        />
      ))
  ));

  return (
    <PortfolioStyle>
      <div className="projects__list" onClick={onVisibleHandler}>
        <ProjectModal
          project={clickedProjectObject}
          isVisible={isModalVisible}
          onCancel={onCloseModal}
        />
        {projectData}
      </div>
    </PortfolioStyle>
  );
};

export default Portfolio;
