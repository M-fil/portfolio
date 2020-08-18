import styled from 'styled-components';
import { colors, mediaQueries } from '../../../constants/constants';

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

const MainStyle = styled('div')`
    word-break: break-word !important;

    @media ${mediaTablet} {
      padding-left: 50px;
    }

    @media ${mediaMobile} {
      padding-left: 5px;
    }

  .main-page__title {
    font-size: 6rem;
    line-height: 7rem;
    color: ${colors.mainPage.nameColor};
    margin-bottom: 0;

    @media ${mediaLaptop} {
      font-size: 3rem;
      line-height: 4rem;
    }

    @media ${mediaTablet} {
      font-size: 4rem;
      line-height: 5rem;
    }

    @media ${mediaMobile} {
      font-size: 3rem;
      line-height: 4rem;
    }
  }

  .main-page__activity {
    font-size: 3rem;
    line-height: 4rem;
    margin: 0;
    word-break: word-break !important;
    color: ${colors.mainPage.activityColor};

    @media ${mediaLaptop} {
      font-size: 2rem;
      line-height: 3rem;
    }

    @media ${mediaTablet} {
      font-size: 2rem;
      line-height: 3rem;
    }

    @media ${mediaMobile} {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

export default MainStyle;
