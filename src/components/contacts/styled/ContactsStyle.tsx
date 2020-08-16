import styled from 'styled-components';

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
  }

  & .contacts__link {
    margin-bottom: 40px;
  }
`;

export default ContactsStyle;
