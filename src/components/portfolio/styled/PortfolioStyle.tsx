import styled from 'styled-components';

const PortfolioStyle = styled('div')`
  padding-right: 20px;

  .projects__list > *:not(:last-child) {
    margin-bottom: 40px;
  }

  .projects__list {
    padding-bottom: 50px;
  }

  .projects__preloader {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: auto;
  }
`;

export default PortfolioStyle;
