import styled from 'styled-components';
import { colors } from '../../../constants/constants';
import { ISideBlockStyles } from '../../../interfaces/interfaces';

const {
  darkSideBackground,
  lightSideBackground,
} = colors.mainPage;

const AppStyle = styled('div')<ISideBlockStyles>`
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
    position: relative;
  
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
    width: ${(props) => props.rightBlockWidth};
    flex-grow: 1;
  }

  #left-side {
    position: relative;
    background: ${darkSideBackground};
    overflow: hidden;
    padding: 30px 150px 30px 30px;
    flex-grow: 1;
    width: calc(${(props) => props.leftBlockWidth});
  }

  #main-content {
    flex-grow: 1;
    width: 100%
  }

  #person-image {
    position: absolute;
    left: ${(props) => props.personImageLeft};
    right: 0;
    bottom: 0;
    z-index: 1000;

    margin: 0 auto;
    width: 450px;
    height: 500px;
  }
`;

export default AppStyle;
