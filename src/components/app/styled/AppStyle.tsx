import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const {
  arrowButtonColor,
} = colors.portfolio;

const AppStyle = styled('div')`
  html {
    font-size: 10px;
    line-height: 10px;
  }

  body {
    padding: 0;
    margin: 0;
  }

  svg {
    font-size: 1.5rem;
    color: ${arrowButtonColor};
  }

  #main-content {

  }
`;

export default AppStyle;
