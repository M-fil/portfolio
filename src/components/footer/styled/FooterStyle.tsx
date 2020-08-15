import styled from 'styled-components';

const FooterStyle = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;

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
