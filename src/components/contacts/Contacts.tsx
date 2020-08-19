import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Avatar } from 'antd';

import ContactsStyle from './styled/ContactsStyle';
import { contactsLinks } from '../../constants/constants';
import Contact from './Contact';

const Slide = require('react-reveal/Slide');

const { Title } = Typography;

const Contacts: React.FC = () => {
  const [t] = useTranslation();

  return (
    <ContactsStyle>
      <div className="contacts__title">
        <Title level={2}>
          {t('contacts.title')}
          <i className="far fa-comment contacts__title-icon" />
        </Title>
      </div>
      <Avatar.Group className="constacts__links">
        {Object.entries(contactsLinks).map((contact) => (
          <Contact key={contact[0]} contact={contact[1]} />
        ))}
      </Avatar.Group>
    </ContactsStyle>
  );
};

export default Contacts;
