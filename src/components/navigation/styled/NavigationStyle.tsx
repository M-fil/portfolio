import styled from 'styled-components';
import { colors, mediaQueries } from '../../../constants/constants';

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

const NavigationStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;

  .navigation__menu {
    font-family: 'Justicman';
    background: transparent;
    font-size: 2rem;
    line-height: 2rem;
    flex-grow: 1;
    border: none;

    @media ${mediaTablet} {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    & a {
      color: ${colors.navigation.textColor};
    }
  }

  .ant-menu-item {
    transition: 0.6s ease-in;
    background-color: transparent !important;
  }

  .ant-menu-item-selected {
    position: relative;
    background-color: transparent !important;
    transform: translateX(20px);

    &::before {
      content: '';

      position: absolute;
      left: 0;
      top: 0;
  
      display: block;
      height: 100%;
      width: 5px;
      background: ${colors.navigation.textColor};
    }
  }

  .ant-menu-item {
    height: fit-content;
    text-overflow: inherit;
    word-break: break-all;
    overflow: inherit;
    white-space: pre-wrap;
  }
`;

export default NavigationStyle;
