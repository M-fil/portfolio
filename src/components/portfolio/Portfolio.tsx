import React, {
  useState,
  useEffect,
  MouseEvent,
} from 'react';
import { Spin } from 'antd';

import Project from './Project';
import ProjectModal from './ProjectModal';
import PortfolioStyle from './styled/PortfolioStyle';
import { IProjectObject } from '../../interfaces/interfaces';
import { getProjects } from '../../service/service';
import useDataWithReducer from '../../custom-hooks/useDataWithReducer';

const Portfolio: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [clickedProjectId, setClickedProjectId] = useState<string | null>(null);
  const [clickedProjectObject, setClickedProjectObject] = useState<IProjectObject | null>(null);
  const { state } = useDataWithReducer(getProjects);

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

  return (
    <PortfolioStyle>
      <div className="projects__list" onClick={onVisibleHandler}>
        <ProjectModal
          project={clickedProjectObject}
          isVisible={isModalVisible}
          onCancel={onCloseModal}
        />
        {/* eslint-disable-next-line no-nested-ternary */}
        {state.isLoading ? (
          <div className="projects__preloader">
            <Spin size="large" />
          </div>
        )
          : state.isError ? 'Error'
            : (state.data && Object.entries(
                state.data as { [propName: string]: IProjectObject },
            ).map((project, index) => (
              <Project
                key={project[0]}
                index={index}
                project={project[1]}
                projectId={project[0]}
              />
            )))}
      </div>
    </PortfolioStyle>
  );
};

export default Portfolio;
