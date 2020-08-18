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

  @media ${mediaTablet} {
    border-top: 2px solid ${colors.mainPage.darkSideBackground};
    padding: 10px;
  }

  & .footer__content {
    display: flex;
    align-items: center;
    color: ${colors.footer.textColor};

    & > *:not(:last-child) {
      margin-right: 10px;

      @media ${mediaLaptop} {
        margin-right: 0;
      }

      @media ${mediaTablet} {
        margin-left: 10px;
      }
    }

    @media ${mediaLaptop} {
      flex-direction: column-reverse;
    }

    @media ${mediaTablet} {
      flex-direction: row-reverse;
      justify-content: flex-start;
  
      width: 100%;
    }
  }

  & .footer__icon {
    margin-right: 5px;
  }

  .footer__offer-questoin {
    @media ${mediaTablet} {
      font-size: 1rem;
    }
  }

  .footer__confirm-button {
    padding: 0;
    font-size: 1.2rem;
    height: fit-content;

    @media ${mediaLaptop} {
      width: 100%;
    }

    @media ${mediaTablet} {
      width: auto;
      padding: 0 10px;
    }
  }
`;

export default FooterStyle;
