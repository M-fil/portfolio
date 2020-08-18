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
  .main-page__title {
    font-size: 6rem;
    line-height: 7rem;
    color: ${colors.mainPage.nameColor};
    margin-bottom: 0;

    @media ${mediaLaptop} {
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
  }
`;

export default MainStyle;
