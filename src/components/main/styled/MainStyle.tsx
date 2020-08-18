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
    @media ${mediaTablet} {
      padding-left: 50px;
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
      font-size: 6rem;
      line-height: 7rem;
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
      font-size: 3rem;
      line-height: 4rem;
    }
  }
`;

export default MainStyle;
