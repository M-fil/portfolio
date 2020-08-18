import styled from 'styled-components';
import { mediaQueries } from '../../../constants/constants';

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

const ProjectStyle = styled.div`
  font-size: 2rem;

  @media ${mediaTablet} {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .ant-card-head-title {
    font-size: 2.5rem;

    @media ${mediaTablet} {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  .badge__icon {
    width: 20px;

    @media ${mediaTablet} {
      width: 15px;
    }
  }

  & [data-project-id] {
    overflow: hidden;
    border-radius: 10px;
  }

  .project__more-button {
    font-size: 1.5rem;

    @media ${mediaTablet} {
      font-size: 1rem;
    }

    & span {
      margin-left: 5px;
    }
  }

  .ant-card-body {
    padding-top: 0;
  }
`;

export default ProjectStyle;
