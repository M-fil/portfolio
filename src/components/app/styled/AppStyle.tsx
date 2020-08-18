import styled from 'styled-components';

import { colors, mediaQueries } from '../../../constants/constants';
import { ISideBlockStyles } from '../../../interfaces/interfaces';

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

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
    transition: 0.6s ease-in;
    background: ${lightSideBackground};
    width: ${(props) => props.rightBlockWidth};
    flex-grow: 1;
    padding: 15px 15px 10px 200px;

    @media ${mediaLaptop} {
      padding-left: 100px;
    }

    @media ${mediaTablet} {
      padding: 20px;
    }
  }

  .left-side {
    transition: 0.6s ease-in;
    left: 0;

    &.closed {
      transition: 0.6s ease-in;
      left: -50%;

      & #person-image {
        visibility: hidden;
      }
    }
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

    @media ${mediaTablet} {
      position: absolute;
      width: 50%;
      height: 100%;
      z-index: 1000;
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
    right: -40%;
    bottom: 0;
    z-index: 1000;

    margin: 0 auto;
    width: 550px;
    height: 600px;

    @media ${mediaLaptop} {
      width: 450px;
      height: 500px;
    }

    @media ${mediaTablet} {
      width: 350px;
      height: 400px;
    }
  }

  .open-menu-button {
    position: absolute;
    right: -50px;
    top: 0;

    display: none;

    background: ${colors.mainPage.darkSideBackground};
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 0;

    @media ${mediaLaptop} {
      display: block;
    }

    & span {
      color: ${colors.navigation.textColor};
      font-size: 1.5rem;
    }
  }

  #overlay {
    transition: 0.6s ease-in;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    transform: translateX(100%);

    opacity: 0;
    margin: auto;
    z-index: 900;
    background: ${colors.mainPage.overlayBackground};

    &.visible {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export default AppStyle;
