import styled from 'styled-components';
import { mediaQueries } from '../../../constants/constants';

const { mediaMobile } = mediaQueries;

const PortfolioStyle = styled('div')`
  padding-right: 20px;

  @media ${mediaMobile} {
    padding-right: 0;
  }

  .projects__list > *:not(:last-child) {
    margin-bottom: 40px;
  }

  .projects__list {
    padding-bottom: 50px;
  }
`;

export default PortfolioStyle;
