import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const NavigationStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;

  & .navigation__menu {
    font-family: 'Justicman';
    background: transparent;
    font-size: 2rem;
    line-height: 2rem;
    flex-grow: 1;
    border: none;

    & a {
      color: ${colors.navigation.textColor};
    }
  }

  & .ant-menu-item {
    background-color: transparent !important;
  }

  & .ant-menu-item-selected {
    position: relative;
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

  & .ant-menu-item {
    height: fit-content;
    text-overflow: inherit;
    word-break: break-all;
    overflow: inherit;
    white-space: pre-wrap;
  }

  & .person__name {
    font-size: 3rem;
    color: ${colors.navigation.textColor};
    margin-bottom: 0;
  }

  & .person__activity {
    font-size: 1.5rem;
    color: ${colors.navigation.activityColor};
  }
`;

export default NavigationStyle;
