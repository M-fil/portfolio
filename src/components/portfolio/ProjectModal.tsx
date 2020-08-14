import React, { MouseEvent } from 'react';
import { Modal, List, Carousel, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { IProjectObject } from '../../interfaces/interfaces';
import ProjectModalStyle from './styled/ProjectModalStyle';
import Slider from './Slider';
import { LinksBadges, ToolsBadges, TeammatesBadges } from './Badges';

interface IProjectModal {
  project: IProjectObject | null;
  isVisible: boolean;
  onCancel: (event: MouseEvent<HTMLElement>) => void;
};

const ProjectModal: React.FC<IProjectModal> = ({
  project, isVisible, onCancel,
}) => {
  const [t] = useTranslation();

  return (
    <ProjectModalStyle>
      {project && (
        <Modal
          className="project-modal"
          title={project.name}
          visible={isVisible}
          closeIcon={<i className="fas fa-times"></i>}
          footer={null}
          onCancel={onCancel}
          width="60vw"
          style={{ top: 20 }}
        >
          <Slider project={project} />

          <LinksBadges project={project} />
          <ToolsBadges project={project} />
          <TeammatesBadges project={project} />
          <List>
            <List.Item.Meta
              title={t('portfolio.description-text')}
              description={t(`portfolio.projects.${project.key}.description`) as string}
            />
          </List>
        </Modal>
      )}
    </ProjectModalStyle>
  )
}

export default ProjectModal;
