import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const MainStyle = styled('div')`
  .main-page__title {
    font-size: 6rem;
    line-height: 7rem;
    color: ${colors.mainPage.nameColor};
    word-break: word-break !important;
    margin-bottom: 0;
  }

  .main-page__activity {
    font-size: 3rem;
    line-height: 4rem;
    margin: 0;
    word-break: word-break !important;
    color: ${colors.mainPage.activityColor};
  }
`;

export default MainStyle;
