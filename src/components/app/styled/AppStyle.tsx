import styled from 'styled-components';
import { colors } from '../../../constants/constants';
import { ISideBlockStyles } from '../../../interfaces/interfaces';

const {
  darkSideBackground,
  lightSideBackground,
} = colors.mainPage;

const AppStyle = styled('div')<ISideBlockStyles>`
  #main {
    position: relative;
  
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #side-sections {
    display: flex;
    flex-grow: 1;
    max-height: 100vh;
    overflow: hidden;
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
    padding: 15px 15px 10px 200px;
  }

  #left-side {
    position: relative;
    background: ${darkSideBackground};
    overflow: hidden;
    padding: 20px 30px;
    flex-grow: 1;
    width: calc(${(props) => props.leftBlockWidth});
  }

  #main-content {
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
    width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${colors.scrollBar.color};
      border-radius: 10px;
    }
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
