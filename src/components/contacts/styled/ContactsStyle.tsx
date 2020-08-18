import styled from 'styled-components';
import { mediaQueries } from '../../../constants/constants';

const {
  labptopL,
  mediaLaptop,
  mediaTablet,
  mediaMobile,
  mediaMobileSmall,
} = mediaQueries;

const ContactsStyle = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .contacts__title {
    display: flex;
    margin-bottom: 50px;
    text-align: center;
  }

  & .contacts__title-icon {
    font-size: 2.5rem;
    margin-left: 10px;
  }

  & .constacts__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 50%;

    @media ${mediaLaptop} {
      justify-content: space-around;

      width: 100%;
      padding: 0 20px;
    }
  }

  & .contacts__link {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 40px;

    @media ${mediaLaptop} {
      width: 200px !important;
      height: 200px !important;
    }
  }
`;

export default ContactsStyle;
