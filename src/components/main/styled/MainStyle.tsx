import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const MainStyle = styled('div')`
  & .main-page__title {
    font-size: 6rem;
    line-height: 7rem;
    color: ${colors.mainPage.darkSideBackground};
    word-break: word-break !important;
  }
`;

export default MainStyle;
