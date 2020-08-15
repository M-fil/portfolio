import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const {
  darkSideBackground,
  lightSideBackground,
} = colors.mainPage;

const AppStyle = styled('div')`
  @font-face { 
    font-family: 'Justicman'; 
    src: url('../../../fonst/Justicman.ttf')  format('truetype'),
    font-weight: 400; 
    font-style: normal; 
  }

  html {
    font-size: 10px;
    line-height: 10px;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Justicman';
  }

  button, input, textarea {
    font-family: 'Justicman';
  }

  #main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #side-sections {
    display: flex;
    flex-grow: 1;
  }

  #left-side, #right-side {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }

  #right-side {
    background: ${lightSideBackground};
    width: 50vw;
    flex-basis: 50%;
  }

  #left-side {
    background: ${darkSideBackground};
    flex-grow: 1;
    overflow: hidden;
    padding: 30px 0 30px 30px;
  }

  #main-content {
    flex-grow: 1;
    width: 100%
  }
`;

export default AppStyle;
