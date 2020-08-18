import styled from 'styled-components';
import { mediaQueries } from '../../../constants/constants';

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

const ProjectModalStyle = styled('div')`
  .project-modal__subtitle {
    font-size: 2rem;
    margin: 0;

    @media ${mediaTablet} {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  .project-modal__description {
    font-size: 1.3rem;

    @media ${mediaTablet} {
      font-size: 1rem;
    }
  }
`;

export default ProjectModalStyle;
