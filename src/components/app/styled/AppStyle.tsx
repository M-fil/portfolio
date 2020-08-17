import styled from 'styled-components';
import { colors } from '../../../constants/constants';
import { ISideBlockStyles } from '../../../interfaces/interfaces';

const {
  darkSideBackground,
  lightSideBackground,
} = colors.mainPage;

const AppStyle = styled('div')<ISideBlockStyles>`
  transition: 3s ease-in;

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
    transition: 0.6s ease-in;
    position: relative;
    background: ${darkSideBackground};
    padding: 20px 30px;
    flex-grow: 1;
    width: calc(${(props) => props.leftBlockWidth});

    & .react-reveal {
      flex-grow: 1;
    }
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
    transition: 0.6s ease-in;
    position: absolute;
    right: -225px;
    bottom: 0;
    z-index: 1000;

    margin: 0 auto;
    width: 550px;
    height: 600px;
  }
`;

export default AppStyle;
