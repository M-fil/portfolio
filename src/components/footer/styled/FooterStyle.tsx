import styled from 'styled-components';
import { colors } from '../../../constants/constants';

const FooterStyle = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  z-index: 500;
  padding-top: 20px;

  font-size: 1.2rem;

  & .footer__content {
    display: flex;
    align-items: center;
    color: ${colors.footer.textColor};

    & > *:not(:last-child) {
      margin-right: 10px;
    }
  }

  & .footer__icon {
    margin-right: 5px;
  }
`;

export default FooterStyle;
