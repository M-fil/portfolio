import styled from 'styled-components';
import { mediaQueries } from '../../../constants/constants';

const {
  mediaLaptop,
  mediaTablet,
  mediaMobileSmall,
} = mediaQueries;

const ContactsStyle = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  .contacts__title {
    display: flex;
    text-align: center;
  }

  .contacts__title-icon {
    font-size: 2.5rem;
    margin-left: 10px;
  }

  .constacts__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 50%;

    @media ${mediaLaptop} {
      justify-content: space-around;

      width: 100%;
      padding: 0 20px;

      &::after {
        display: none;
      }

      @media ${mediaTablet} {
        padding: 0;
      }
    }

    @media ${mediaTablet} {
      justify-content: space-between;

      &::after {
        width: 130px;
        height: 130px;

        @media ${mediaLaptop} {
          display: none;
        }
      }
    }

    &::after {
      content: "";

      display: block;
      width: 150px;
      height: 150px;
    }
  }

  .contacts__link {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 40px;

    @media ${mediaLaptop} {
      width: 200px !important;
      height: 200px !important;
    }

    @media ${mediaTablet} {
      width: 130px !important;
      height: 130px !important;
      margin-bottom: 20px;
    }
  }

  .contacts__phone-number {
    font-size: 2rem;
    margin-bottom: 50px;
    text-align: center;

    @media ${mediaLaptop} {
      font-size: 1.5rem;
    }

    @media ${mediaTablet} {
      font-size: 2rem;
    }

    @media ${mediaMobileSmall} {
      font-size: 1.5rem;
    }
  }
`;

export default ContactsStyle;
