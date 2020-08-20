import styled from 'styled-components';
import { colors, mediaQueries } from '../../../constants/constants';

const {
  javascriptIconColor,
  reactIconColor,
  phpIconColor,
} = colors.portfolio;

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

const CareerStyle = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 100px;
  padding-left: 40px;

  @media ${mediaTablet} {
    padding-left: 20px;
  }

  & i {
    transform: scale(2);

    &.fa-js {
      color: ${javascriptIconColor}
    }

    &.fa-php {
      color: ${phpIconColor}
    }

    &.fa-react {
      color: ${reactIconColor}
    }
  }

  .steps__logo {
    position: relative;
    left: -30px;

    width: 70px;
    height: 40px;
  }

  .steps__square-logo {
    width: 80px;
    height: 80px;
    left: -25px;
  }

  .steps__second-logo {
    top: 10px;
  }

  .steps__svg-icon {
    transform: scale(1.5);
  }

  .steps__multiple-icons {
    & > * {
      margin-bottom: 20px;
    }
  }

  .ant-steps-item-content {
    padding-left: 10px;
  }

  .ant-steps-item-title {
    display: flex;
    flex-direction: column;

    font-size: 1.7rem;

    @media ${mediaTablet} {
      font-size: 1.4rem;
    }
  }

  .ant-steps-item-subtitle {
    font-size: 1.4rem;
    margin-left: 0;
    text-decoration: underline;

    @media ${mediaTablet} {
      font-size: 1rem;
    }
  }

  .ant-steps-item-description {
    font-size: 1.1rem;

    @media ${mediaLaptop} {
      font-size: 1.2rem;
    }

    @media ${mediaTablet} {
      font-size: 1rem;
    }
  }

  .fa-times-circle {
    color: ${colors.career.failColor};
  }
`;

export default CareerStyle;
