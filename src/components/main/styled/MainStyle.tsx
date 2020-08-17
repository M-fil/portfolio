import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const MainStyle = styled('div')`
  & .main-page__title {
    font-size: 6rem;
    color: ${colors.mainPage.darkSideBackground};
    word-break: break-all;
  }
`;

export default MainStyle;
