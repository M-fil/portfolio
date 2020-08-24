import styled, { css } from 'styled-components';

import { colors, mediaQueries, screenResolutions } from '../../../constants/constants';
import { ISideBlockStyles } from '../../../interfaces/interfaces';

const {
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
    position: relative;
    transition: 0.6s ease-in;
    background: ${lightSideBackground};
    width: ${(props) => props.rightBlockWidth};
    flex-grow: 1;
    padding: 10px 20px;

    @media ${mediaTablet} {
      padding: 0;
      padding-top: 20px;
    }
  }

  .left-side {
    transition: 0.6s ease-in;
    left: 0;

    @media ${mediaTablet} {
      &.closed {
        transition: 0.6s ease-in;
        left: -80%;

        & #person-image {
          visibility: hidden;
        }
      }
    }

    @media ${mediaMobileSmall} {
      &.closed {
        left: -60%;
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
      word-break: break-word !important;
    }

    & #person-image {
      transition: 0.6s ease-in;
      position: absolute;
      bottom: 0;
      z-index: 1000;
      margin: 0 auto;

      @media (min-width: ${screenResolutions.mediaTablet}) {
        ${(props) => (props.isMainPage ? (css`
          width: 400px;
          height: 550px;
          right: -20%;

          @media ${mediaLaptop} {
            width: 300px;
            height: 450px;
          }
        `) : css`
          width: 350px;
          height: 450px;
          right: -25%;

          @media ${mediaLaptop} {
            width: 250px;
            height: 400px;
            right: -40%;
          }
      `)}
      }

      @media ${mediaTablet} {
        width: 300px;
        height: 450px;
        right: -10%;
      }

      @media ${mediaMobile} {
        width: 250px;
        height: 400px;
        right: -10%;
      }
    }

    @media ${mediaTablet} {
      position: absolute;
      width: 80%;
      height: 100%;
      z-index: 1000;
    }

    @media ${mediaMobileSmall} {
      padding: 10px 0;
      width: 60%;
    }
  }

  #main-content {
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    @media ${mediaTablet} {
      padding: 20px;
    }

    &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${colors.scrollBar.color};
      border-radius: 10px;
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

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    transform: translateX(100%);

    display: none;
    opacity: 0;
    margin: auto;
    z-index: 900;
    background: ${colors.mainPage.overlayBackground};

    &.visible {
      transform: translateX(0);
      opacity: 1;
    }

    @media ${mediaTablet} {
      display: block;
    } 
  }
`;

export default AppStyle;
