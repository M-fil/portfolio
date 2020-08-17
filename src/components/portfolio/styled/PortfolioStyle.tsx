import styled from 'styled-components';

const PortfolioStyle = styled('div')`
  .projects__list > *:not(:last-child) {
    margin-bottom: 40px;
  }

  .projects__list {
    padding-bottom: 50px;
  }
`;

export default PortfolioStyle;
