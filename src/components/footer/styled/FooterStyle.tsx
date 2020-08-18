import styled from 'styled-components';
import { colors, mediaQueries } from '../../../constants/constants';

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

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

      @media ${mediaLaptop} {
        margin-right: 0;
      }
    }

    @media ${mediaLaptop} {
      flex-direction: column-reverse;
    }
  }

  & .footer__icon {
    margin-right: 5px;
  }

  .footer__confirm-button {
    padding: 0;
    font-size: 1.2rem;
    height: fit-content;

    @media ${mediaLaptop} {
      width: 100%;
    }
  }
`;

export default FooterStyle;
