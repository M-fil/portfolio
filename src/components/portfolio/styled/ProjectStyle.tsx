import styled from 'styled-components';

const ProjectStyle = styled.div`
  font-size: 2rem;

  & .ant-card-head-title {
    font-size: 2.5rem;
  }

  & .badge__icon {
    width: 20px;
  }

  & [data-project-id] {
    overflow: hidden;
    border-radius: 10px;
  }

  & .project__more-button {
    font-size: 1.5rem;

    & span {
      margin-left: 5px;
    }
  }

  & .ant-card-body {
    padding-top: 0;
  }
`;

export default ProjectStyle;
