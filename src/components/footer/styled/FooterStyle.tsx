import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const FooterStyle = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  background: transparent;
  z-index: 500;

  & .footer__content {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 10px;
    }
  }

  & .footer__icon {
    margin-right: 5px;
  }
`;

export default FooterStyle;
