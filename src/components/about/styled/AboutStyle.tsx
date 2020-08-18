import styled from 'styled-components';

import { colors, mediaQueries } from '../../../constants/constants';

const { about } = colors;

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

const AboutStyle = styled('div')`
  color: ${about.textColor};

  .about__name {
    text-align: left;
    font-size: 2.5rem;
    margin: 0;

    @media ${mediaLaptop} {
      font-size: 3rem;
    }

    & > *:not(:last-child) {
      margin-right: 20px;

      @media ${mediaLaptop} {
        margin-right: 0;
      }
    }

    @media ${mediaLaptop} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .about__short-info {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 20px;

    @media ${mediaLaptop} {
      font-size: 2rem;
    }
  }

  .about__description {
    text-align: left;
    font-size: 1.3rem;

    margin-bottom: 20px;

    @media ${mediaLaptop} {
      font-size: 1.5rem;
    }
  }

  .about__skills {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding-right: 30px;

    @media ${mediaLaptop} {
      flex-direction: column;
      justify-content: center;
      padding-left: 15%;
    }
  }

  .about__skill {
    font-size: 2rem;
    display: flex;
    align-items: center;
    color: ${about.textColor};

    margin: 5px;
    margin-bottom: 30px;
    flex-basis: 40%;
  }

  .ant-progress-inner {
    width: 100px !important;
    height: 100px !important;

    @media ${mediaLaptop} {
      width: 150px !important;
      height: 150px !important;
    }
  }

  .ant-progress-text {
    font-size: 2rem;
  }

  .skill__name {
    display: flex;
    align-items: center;
  
    margin-left: 10px;

    & i {
      font-size: 3rem;
    }
  }

  .about__download-button {
    font-size: 1.5rem;
    height: fit-content;

    @media ${mediaLaptop} {
      margin-right: 0;
      font-size: 1.8rem;
    }
  }

  .skill__icon {
    margin-left: 5px;
  }

  .skill__icon-image {
    width: 40px;
    height: 40px;
  }
`;

export default AboutStyle;
