import React, { MouseEvent } from 'react';
import { Modal } from 'antd';

interface IProjectModal {
  title: string;
  isVisible: boolean;
  onCancel: (event: MouseEvent<HTMLElement>) => void;
};

const ProjectModal: React.FC<IProjectModal> = ({
  title, isVisible, onCancel,
}) => {
  return (
    <Modal
      className="project-modal"
      title={title}
      visible={isVisible}
      closeIcon={<i className="fas fa-times"></i>}
      footer={null}
      onCancel={onCancel}
    >
      <div className="project-decsription">
        lkgfdslkgmskdlgmfdkslmgsfmd
      </div>
    </Modal>
  )
}

export default ProjectModal;
