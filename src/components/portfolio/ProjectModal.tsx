import React, { MouseEvent } from 'react';
import { Modal, List } from 'antd';
import { useTranslation } from 'react-i18next';

import { IProjectObject } from '../../interfaces/interfaces';
import Slider from './Slider';
import { LinksBadges, ToolsBadges, TeammatesBadges } from './Badges';
import ProjectModalStyle from './styled/ProjectModalStyle';
import Video from './Video';
import { projects } from '../../constants/constants';

interface IProjectModal {
  project: IProjectObject | null;
  isVisible: boolean;
  onCancel: (event: MouseEvent<HTMLElement>) => void;
}

const ProjectModal: React.FC<IProjectModal> = ({
  project, isVisible, onCancel,
}) => {
  const [t] = useTranslation();

  return (
    <>
      {project && (
        <Modal
          className="project-modal"
          title={project.name}
          visible={isVisible}
          closeIcon={<i className="fas fa-times" />}
          footer={null}
          onCancel={onCancel}
          width="60vw"
          style={{ top: 20 }}
        >
          <ProjectModalStyle>
            <Slider project={project} />
            <LinksBadges project={project} />
            <ToolsBadges project={project} />
            <TeammatesBadges project={project} />
            <List>
              <List.Item.Meta
                title={(
                  <h3 className="project-modal__title">
                    {t('portfolio.description-text')}
                  </h3>
                )}
                description={(
                  <div className="project-modal__description">
                    {t(`portfolio.projects.${project.key}.description`) as string}
                  </div>
                )}
              />
            </List>
          </ProjectModalStyle>
        </Modal>
      )}
    </>
  );
};

export default ProjectModal;
